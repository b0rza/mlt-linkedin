'use strict';

const config = require('./config');
const express = require('express');
const oauth = require('./oauth');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello<br><a href="/oauth/auth">Log in with LinkedIn</a>');
});
router.get('/config', (_, res) => res.json(config));

router.use(oauth.path, oauth.router);

module.exports = router;
