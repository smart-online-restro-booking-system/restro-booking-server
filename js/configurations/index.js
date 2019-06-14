const nconf = require('nconf');
const path = require('path');

const environmentLogConfig = {
    development: path.resolve(__dirname, '../../config.dev.json'),
    production: path.resolve(__dirname, '../../config.prod.json')
};

function setupConfigs(env) {

    let configFilePath = environmentLogConfig[env];
    if (configFilePath) {
        nconf.file(configFilePath);
    }
}

module.exports = {
    setupConfigs: setupConfigs
};
