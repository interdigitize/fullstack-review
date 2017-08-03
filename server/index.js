const express = require('express');
const bodyParser = require('body-parser');
const gitHub = require('../helpers/github');
const repoFilter = require('../helpers/filterRepoData');
const db = require('../database/index');
const Promise = require('bluebird')

let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.post('/repos', function (req, res) {
  //check if the GitHub username provided exists in the database

  Promise.resolve(db.checkExists(req.body.name))
    .then(
      //return the repos to the client

    )
    .catch(
      // get the repo information from the github API
      Promise.resolve(repoFilter.repoFilter(req.body.name))
      .then( repos => {
        // save the repo information in the database
        repos.forEach(repo => { db.saveRepo(repo) });
        //return them to the Client
        res.send(repos);
      })
      .error( err => res.send(err) )
    )
    .error( err => res.send(err) );

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.end()
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
