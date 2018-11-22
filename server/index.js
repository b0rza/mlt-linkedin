'use strict';

const { auth, hostname, port } = require('./config');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const router = require('./router');

const app = express();

app.use(session({ secret: auth.session.secret }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);

app.listen(port, hostname, () => {
  console.log(`✈️  mlt-oauth listening on http://${hostname}:${port}`);
})

module.exports = app;
