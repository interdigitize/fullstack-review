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

  // // The options object has been provided to help you out,
  // // but you'll have to fill in the URL
  // let options = {
  //   url: 'https://api.github.com/orgs/octokit/repos',
      // 'Authorization': `token ${config.TOKEN}`,
  //
  // };

}

module.exports.getReposByUsername = getReposByUsername;
