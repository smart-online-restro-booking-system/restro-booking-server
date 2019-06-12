const log4js = require('log4js');
const _ = require('underscore');

const DEFAULT_LOG_NAME = 'application';

const configureLogger = _.once(function configure(loggerConfig) {
    log4js.configure(loggerConfig);
});

const getLogger = function (logName) {
    logName = logName || DEFAULT_LOG_NAME;
    return log4js.getLogger(logName);
}

module.exports = {
    configureLogger: configureLogger,
    getLogger: getLogger
};
