const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (name) => {
  var url = 'https://api.github.com/users/' + name + '/repos';
  axios.get(url, {
      headers: {
        'User-Agent': 'request',
        'Accept': 'application/vnd.github.v3+json'
      },
      params: {
        access_token: '5f93ede9ab6bab45507af62f784974944a25f8f4',
        type: 'owner',
        sort: 'pushed'
      }
    })
    .then( response => console.log(response))
    .catch( error => console.log(error));

  // // The options object has been provided to help you out,
  // // but you'll have to fill in the URL
  // let options = {
  //   url: 'https://api.github.com/orgs/octokit/repos',
      // 'Authorization': `token ${config.TOKEN}`,
  //
  // };

}

module.exports.getReposByUsername = getReposByUsername;
