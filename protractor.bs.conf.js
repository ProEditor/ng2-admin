// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],

  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

  commonCapabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'alexander1040',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'Jauouq9xfuiy9FZq3uA4',
    'build': '@nga/theme',
    'name': '@nga/theme',
    'browserstack.local': true,
    'browserstack.debug': true,
    'browserName': 'Chrome',
  },

  multiCapabilities: [
    {
      'browserName': 'Chrome',
    },
    {
      'browserName': 'Safari',
    },
    {
      'browserName': 'Firefox',
    },
    {
      'browserName': 'IE',
    },
  ],

  onPrepare: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
