'use strict';

const http = require('http');
const querystring = require('querystring');
const winston = require('winston');

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
    exitOnError: false,
});

const db = require('./db');

var server = http.createServer((req, res) => {
    logger.info('req', req);

    if (req.method === 'POST' && req.url === '/data/report/') {
        var body = '';
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            const report = querystring.decode(body);
            logger.info('data', report);
            db.Report.create(report);
            res.writeHead(201);
            res.end();
        });

        // set response header
        //res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        //res.write('<html><body><p>This is home Page.</p></body></html>');
        //res.end();
    }
});

const PORT = process.env.MY_PORT || 8088;
server.listen(PORT);

logger.info('Node.js web server at port ' + PORT + ' is running.');
