import http from 'http';
import querystring from 'querystring';
import winston from 'winston';

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
    exitOnError: false,
});

import db from './db.js';

const server = http.createServer((req, res) => {
    logger.info('req', req);

    if (req.method === 'POST' && req.url === '/data/report/') {
        let body = '';
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            const report = querystring.decode(body);
            logger.info('data', report);
            db.Report.create(report);

            // respond with 201 Created as create() is async and we don't know the result yet
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
