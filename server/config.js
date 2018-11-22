'use strict';

module.exports = {
  hostname: process.env.HOSTNAME,
  port: process.env.PORT,
  auth: {
    session: {
      secret: process.env.SESSION_SECRET
    },
    linkedin: {
      id: process.env.LINKEDIN_ID,
      redirectUri: process.env.LINKEDIN_REDIRECT_URI,
      secret: process.env.LINKEDIN_SECRET
    }
  }
};
