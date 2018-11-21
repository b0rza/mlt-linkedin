'use strict';

const { oauth: { linkedin } } = require('../../config');
const simpleOAuth2 = require('simple-oauth2');

const client = {
  id: linkedin.id,
  secret: linkedin.secret,
};

const auth = {
  tokenHost: 'https://linkedin.com',
  authorizePath: '/oauth/v2/authorization',
  tokenPath: '/oauth/v2/accessToken'
};

const authorization = {
  redirect_uri: linkedin.redirectUri,
  scope: 'r_basicprofile',
  state: '3(#0/!~'
};

const oauth = simpleOAuth2.create({ auth, client });
const authorizationUri = oauth.authorizationCode.authorizeURL(authorization);

module.exports = {
  authorizationUri,
  oauth
}
