'use strict';

const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();
const hostname = 'local.mlt-oauth.com'
const port = 3000

const config = require('./config');
const address = `http://${hostname}:${port}`;

app.use('/', router);

app.listen(port, hostname, () => {
  console.log(`✈️  mlt-oauth listening on ${address}`);
})

module.exports = app;
