'use strict';

const config = require('./config');
const express = require('express');
const auth = require('./auth');

const router = express.Router();

function permit({ user }, res, next) {
  return user ? next() : res.status(401).send('Not logged in!');
}

router
  .get('/', (req, res) => {
    res.send('Hello<br><a href="/auth/linkedin/auth">Log in with LinkedIn</a>')
  })
  .get('/config', (_, res) => res.json(config))
  .get('/profile', permit, (req, res) => res.json(req.user));

router.use(auth.path, auth.router);

module.exports = router;
