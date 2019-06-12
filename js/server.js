const express = require('express');
const nconf = require('nconf');

const logger = require('./logger').getLogger('application');

const app = express();
const port = nconf.get('server:port');


function start() {

    app.get('/', (req, res) => {
        res.send(200, { status: 'ok' });
    });

    app.listen(port, () => {
        logger.debug(`Listening on port: ${port}`);
    });
}

module.exports = {
    start: start
};
