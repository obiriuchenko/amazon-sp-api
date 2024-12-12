const CustomError = require('./CustomError');
const https = require('https');
const { URL } = require('url');

// Set up timeouts if set in request options; destroy request & reject with error if exceeded
// - response is the time between sending the request and receiving the first byte of the response. Includes DNS and connection time.
// - idle is the time between receiving the last chunk and waiting for the next chunk to be received. Might be fired if a request is stalled before finished (i.e. when internet connection is lost).
// - deadline is the time from the start of the request to receiving the response body in full. If the deadline is too short large files may not load at all on slow connections.

let setTimeouts = {
  response:(req, timeout_ms) => {
    return setTimeout(() => {
      // req.destroy will cause an error event to be emitted, rejection is handled in error event handler     
      req.destroy(new CustomError({ 
        code:'API_RESPONSE_TIMEOUT',
        message:'No data received within specified response timeout (' + timeout_ms + 'ms).',
        timeout:timeout_ms
      }));
    }, timeout_ms);
  },
  deadline:(req, timeout_ms) => {
    return setTimeout(() => {
      // req.destroy will cause an error event to be emitted, rejection is handled in error event handler     
      req.destroy(new CustomError({ 
        code:'API_DEADLINE_TIMEOUT',
        message:'Response was not completely received within specified deadline timeout (' + timeout_ms + 'ms).',
        timeout: timeout_ms
      }));
    }, timeout_ms);
  },
  idle:(req, timeout_ms) => {
    return setTimeout(() => {
      // req.destroy will cause an error event to be emitted, rejection is handled in error event handler 
      req.destroy(new CustomError({ 
        code:'API_IDLE_TIMEOUT',
        message:'Next chunk of response was not received within specified idle timeout (' + timeout_ms + 'ms).',
        timeout: timeout_ms
      }));
    }, timeout_ms);
  }
};

module.exports = (req_options) => {
  return new Promise((resolve, reject) => {
    let url = new URL(req_options.url);
    let options = {
      method:req_options.method,
      port:443,
      hostname:url.hostname,
      path:url.pathname + url.search,
      headers:req_options.headers || {}
    };

    const max_body_size = req_options.max_body_size || 1024 * 1024 * 512; // 512 MB is the maximum string length in Node.js

    let post_params;
    if (req_options.body){
      post_params = req_options.body;
      options.headers['Content-Length'] = Buffer.byteLength(post_params);
    }

    let timeouts = {};
 
    let req = https.request(options, (res) => {
      let chunks = [];
      let body = '';
      let current_size = 0;
      res.on('data', (chunk) => {
      	if (timeouts.response){
          clearTimeout(timeouts.response);
          delete timeouts.response;
      	}
        if (timeouts.idle){
          clearTimeout(timeouts.idle);
        }
        if (req_options.timeouts && req_options.timeouts.idle){
          timeouts.idle = setTimeouts.idle(req, req_options.timeouts.idle);
        }

        current_size += chunk.length;
        if (current_size > max_body_size) {
            res.destroy();
            return reject(
                new CustomError({
                    code: 'BODY_SIZE_LIMIT_EXCEEDED',
                    message: `Response body size exceeded the limit of ${Math.ceil(max_body_size / 1024 / 1024)} MB`,
                    size: current_size
                })
            );
        }

        body += chunk;
        chunks.push(chunk);
      });
      res.on('end', () => {
        ['idle', 'deadline'].map((timeout_type) => {
          if (timeouts[timeout_type]){
            clearTimeout(timeouts[timeout_type]);
          }
        });
        resolve({
          body:body,
          chunks:chunks,
          statusCode:res.statusCode,
          headers:res.headers
        });
      });
    });

    ['response', 'deadline'].map((timeout_type) => {
      if (req_options.timeouts && req_options.timeouts[timeout_type]){
        timeouts[timeout_type] = setTimeouts[timeout_type](req, req_options.timeouts[timeout_type]);
      }
    });

    req.on('error', (e) => {
      reject(e);
    });
    if (post_params){
      req.write(post_params, 'utf8');
    }
    req.end();
  });
};
