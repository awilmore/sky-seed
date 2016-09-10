'use strict';

module.exports = {
  ip: process.env.IP || undefined,
  mongo: {
    uri: 'mongodb://host/sky-node-seed',
    options: {
      user: 'skyseed',
      pass: 'skyseed'
    }
  }
};
