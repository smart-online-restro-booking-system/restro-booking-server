const express = require('express');
const nconf = require('nconf');

const logger = require('./logger').getLogger('application');

const app = express();
const port = nconf.get('server:port');

function start() {
   
    //Routes
    app.use(require('./routes'))

    app.listen(port, () => {
        logger.debug(`Listening on port: ${port}`);
    });
}

module.exports = {
    start: start
};
