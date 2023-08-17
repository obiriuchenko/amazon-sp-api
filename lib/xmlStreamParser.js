const sax = require('sax');

module.exports = async (xmlStream) => {
    return new Promise((resolve, reject) => {
        const saxStream = sax.createStream(true); // strict mode
        const stack = [];
        let result = [];

        saxStream.on('opentag', (node) => {
            const currentObj = {
                [node.name]: ''
            };
            stack.push(currentObj);
        });

        saxStream.on('text', (text) => {
            const trimmedText = text.trim();

            if (stack.length > 0 && trimmedText.length > 0) {
                const currentObj = stack[stack.length - 1];
                const currentTagName = Object.keys(currentObj)[0];

                let value = trimmedText;

                const isBoolean = trimmedText === 'true' || trimmedText === 'false';
                if (isBoolean) {
                    value = trimmedText === 'true';
                } else {
                    const isStringStartsWithZeroAndMoreDigits = /^0\d+/.test(trimmedText);
                    const asNumber = !isNaN(trimmedText) && !isStringStartsWithZeroAndMoreDigits;
                    if (asNumber) {
                        value = parseFloat(trimmedText);
                    }
                }
                currentObj[currentTagName] = value;
            }
        });

        saxStream.on('closetag', (closedTagName) => {
            const closedObj = stack.pop();

            if (stack.length > 0) {
                const currentObj = stack[stack.length - 1];
                const outerTagName = Object.keys(currentObj)[0];

                if (!currentObj[outerTagName]) {
                    currentObj[outerTagName] = {};
                }

                if (currentObj[outerTagName][closedTagName]) {
                    const outerTagValue = currentObj[outerTagName][closedTagName];
                    if (!Array.isArray(outerTagValue)) {
                        currentObj[outerTagName][closedTagName] = [outerTagValue];
                    }
                    currentObj[outerTagName][closedTagName].push(closedObj[closedTagName]);
                } else {
                    currentObj[outerTagName][closedTagName] = closedObj[closedTagName];
                }
            } else {
                result = closedObj;
            }
        });

        saxStream.on('end', () => {
            resolve(result);
        });

        saxStream.on('error', (err) => {
            reject(err);
        });

        xmlStream.pipe(saxStream);
    });
};