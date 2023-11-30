const { config: baseConfig } = require('./base.conf.js');

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      projectName: "Accessibility Project",
      buildName: 'browserstack build',
      source: 'webdriverio:sample-master:v1.2'
    }
  },
  services: [
    [
      'browserstack',
      { 
        buildIdentifier: '#${BUILD_NUMBER}',
        accessibility: true,
      },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
      },
    },
    {
      browserName: 'safari',
      browserVersion: 'latest',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Big Sur',
      },
    },
    {
      browserName: 'chrome',
      'bstack:options': {
        deviceName: 'Samsung Galaxy S20',
      },
    },
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});
