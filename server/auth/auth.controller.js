'use strict';

const authenticate = (req, res) =>  {
  return req.client.authenticate(req, res);
}

function callback (req, res) {
  return req.client.callback(req, res);
}

module.exports = {
  authenticate,
  callback
}
