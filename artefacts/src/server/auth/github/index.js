'use strict';

var config = require('../../config/environment/index');
var request = require('request');
var _ = require('lodash');

function tokenParams(commonTokenParams) {
  return _.merge(commonTokenParams, {
    client_secret: config.auth.github.clientSecret
  });
}

function lookupToken(commonTokenParams) {
  return new Promise(function(resolve, reject) {
    request.get({ url: config.auth.github.tokenEndpoint, qs: tokenParams(commonTokenParams), json: true, proxy: config.proxy }, function(err, res, token) {
      if (err) { return reject(err); }
      if (token.error) { return reject(token); }
      resolve(token);
    });
  });
}

function toStandardUserInfo(userInfo) {
  return {
    ids: { github: userInfo.id },
    email: userInfo.email,
    name: userInfo.name,
    picture: userInfo.avatar_url
  };
}

function retrieveUserInfo(token, cb) {
  request.get({ url: config.auth.github.userInfoEndpoint, qs: token, headers: {'User-Agent': 'Node'}, json: true, proxy: config.proxy }, function(err, res, userInfo) {
    if (err) { return cb(err); }
    cb(null, toStandardUserInfo(userInfo));
  });
}

function auth(commonTokenParams, cb) {
  lookupToken(commonTokenParams).then(function(token) {
    retrieveUserInfo(token, cb);
  }, cb);
}

module.exports = auth;
