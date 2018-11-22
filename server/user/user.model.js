'use strict'

const users = {};

function findOrCreate(payload) {
  if(!users[payload.id]) {
    users[payload.id] = payload;
  }
  return Promise.resolve(payload);
}

function findById(id) {
  return Promise.resolve(users[id]);
}

module.exports = {
  findById,
  findOrCreate
}
