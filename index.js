const process = require('process');

const configurations = require('./js/configurations');
const environment = process.env.NODE_ENV || 'development';

function setupLogConfigs() {
    const nconf = require('nconf');
    const logger = require('./js/logger');

    const loggerConfig = nconf.get('logging');

    logger.configureLogger(loggerConfig);
}

function init() {
    //import server file and setup express server post nconf configurations setup
    const server = require('./js/server');

    server.start();
}

//Setup nconf configurations
configurations.setupConfigs(environment);

//Setup logger Configs
setupLogConfigs();

init();
