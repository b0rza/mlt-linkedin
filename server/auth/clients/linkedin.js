'use strict';

const { auth: { linkedin } } = require('../../config');
const { User } = require('../../common/database');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const passport = require('passport');

const redirectConfig = {
  successRedirect: '/profile',
  failureRedirect: '/'
};

const strategyConfig = {
  clientID: linkedin.id,
  clientSecret: linkedin.secret,
  callbackURL: linkedin.redirectUri,
  scope: ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share']
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  process.nextTick(() => {
    return User.findOrCreate(profile).then(user => done(null, user));
  });
}

passport.use(new LinkedInStrategy(strategyConfig, verifyCallback));

module.exports = {
  authenticate: passport.authenticate('linkedin'),
  callback: passport.authenticate('linkedin', redirectConfig)
}
