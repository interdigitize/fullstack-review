const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (name) => {
  var url = 'https://api.github.com/users/' + name + '/repos';
  return axios.get(url, {
      headers: {
        'User-Agent': 'request',
        'Accept': 'application/vnd.github.v3+json'
      },
      params: {
        access_token: config.TOKEN,
        type: 'owner',
        sort: 'pushed'
      }
    })

}

module.exports.getReposByUsername = getReposByUsername;
