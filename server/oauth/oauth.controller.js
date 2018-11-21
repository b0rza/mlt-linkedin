'use strict';

function authorize (req, res) {
  const { authorizationUri } = req.client;
  res.redirect(authorizationUri);
}

async function callback (req, res) {
  const { code } = req.query;
  const { oauth } = req.client;

  try {
    const result = await oauth.authorizationCode.getToken({ code });
    console.log('The resulting token: ', result);
    const token = oauth.accessToken.create(result);
    return res.status(200).json(token)
  } catch(error) {
    console.error(error);
    return res.status(500).json('Authentication failed');
  }
}

module.exports = {
  authorize,
  callback
}
