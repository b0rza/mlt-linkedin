'use strict';

const clients = require('./clients');
const ctrl = require('./auth.controller');
const express = require('express');
const passport = require('passport');
const get = require('lodash/get');
const User = require('../user/user.model');

const router = express.Router();

function loadClient(req, _, next) {
  req.client = get(clients, req.params.client);
  next();
}

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>  {
  return User.findById(id).then(user => done(null, user));
});

router
  .param('client', loadClient)
  .get('/:client/auth', ctrl.authenticate)
  .get('/:client/cb', ctrl.callback)

module.exports = {
  path: '/auth',
  router
}
