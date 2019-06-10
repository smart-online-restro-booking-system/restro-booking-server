//Required express, nconf and log4js
const express = require('express');
const nconf = require('nconf');
const log4js = require('log4js');

//Enable logs by setting the level of logger as below
const logger = log4js.getLogger();
logger.level = 'debug'

//Get port from the conifg.json file
nconf.env();
nconf.file('./config.json')
var port = nconf.get('environment:development:port');

//Create instance of express
const app = express();

app.get('/', (req,res)=>{
    res.send(200,{Status:'ok'});
})

app.listen(port, ()=> {
    logger.debug(`Listening on port ${port}!!`);
})
