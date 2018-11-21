'use strict';

const clients = require('./clients');
const ctrl = require('./oauth.controller');
const express = require('express');
const lodash = require('lodash');

const router = express.Router();

function loadClient(req, _, next) {
  req.client = get(clients, req.params.client);
  next();
}

router
  .param('client', loadClient)
  .get('/:client/auth', ctrl.authorize)
  .get('/:client/cb', ctrl.callback)

module.exports = {
  path: '/oauth',
  router
}
