'use strict';

const simpleOAuth2 = require('simple-oauth2');

const config = {
  client: {
    id: oauth.linkedin.id,
    secret: oauth.linkedin.secret,
  },
  auth: {
    tokenHost: 'https://linkedin.com',
    authorizePath: '/oauth/v2/authorization',
    tokenPath: '/oauth/v2/accessToken'
  },
  authorization: {
    redirect_uri: oauth.redirectUri,
    scope: 'r_basicprofile',
    state: '3(#0/!~'
  }
}

const oauth = simpleOAuth2.create({ auth, client });
const authorizationUri = oauth.authorizationCode.authorizeURL(authorization);

module.exports = {
  authorizationUri,
  oauth
}
