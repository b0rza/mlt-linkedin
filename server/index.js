const express = require('express');
const path = require('path');

const app = express();
const hostname = 'local.mlt-linkedin.com'
const port = 3000

const address = `http://${hostname}:${port}`;
app.use('/', express.static(path.join(__dirname, '..', 'client')));

app.listen(port, hostname, () => {
  console.log(`✈️  mlt-linkedin listening on ${address}`);
})

module.exports = app;
