const config = require('./config');
const SellingPartnerAPI = require('../index');

module.exports.mochaHooks = {
  beforeAll: async function () {
    let sellingPartner = new SellingPartnerAPI({
      region: config.region,
      refresh_token: config.refresh_token,
      options: {
        auto_request_tokens: false
      }
    });
    await sellingPartner.refreshAccessToken();
    config.access_token = sellingPartner.access_token;
    this.config = config;
  },

  beforeEach: function (done) {
    let skip_hook_titles = ['configErrors', 'authorization', 'notifications'];
    if (!skip_hook_titles.includes(this.currentTest.parent.title)) {
      this.sellingPartner = new SellingPartnerAPI({
        region: config.region,
        refresh_token: config.refresh_token,
        access_token: config.access_token,
        options: {
          auto_request_tokens: false
        },
        endpoints_versions: {
          reports: '2021-06-30'
        }
      });
    }
    done();
  }
};
