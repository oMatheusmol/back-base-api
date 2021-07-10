'use strict'

const https = require('https');
const http = require('http');
const fs = require('fs');
const config = require('config');

module.exports = (app, useHttps = false) => {
    if (useHttps) {
        const privateKey = fs.readFileSync('config/cert.key', 'utf8');
        //const certificate = fs.readFileSync('config/cert.crt', 'utf8');
        const certificate = {};

        if (config.get('SERVER.CERTIFIED.KEY')) {
            certificate['key'] = fs.readFileSync(config.get('SERVER.CERTIFIED.KEY'));
        }

        if (config.get('SERVER.CERTIFIED.CERT')) {
            certificate['cert'] = fs.readFileSync(config.get('SERVER.CERTIFIED.CERT'));
        }

        if (config.get('SERVER.CERTIFIED.CA')) {
            certificate['ca'] = fs.readFileSync(config.get('SERVER.CERTIFIED.CA'));
        }

        if (config.get('SERVER.CERTIFIED.PFX')) {
            certificate['pfx'] = fs.readFileSync(config.get('SERVER.CERTIFIED.PFX'));
        }

        if (config.get('SERVER.CERTIFIED.PASSPHRASE')) {
            certificate['passphrase'] = config.get('SERVER.CERTIFIED.PASSPHRASE');
}
        const credentials = { key: privateKey, cert: certificate };
        const server = https.createServer(credentials, app);
        return server;
    }
    else {
        const server = http.createServer(app);
        return server;

    }
}
