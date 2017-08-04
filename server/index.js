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
  db.checkExists({'owner': req.body.name})
    .then( foundRepos => {
      //check if the GitHub username provided exists in the database
      if (foundRepos.length === 0) {
        Promise.resolve(repoFilter.repoFilter(req.body.name))
        .then( repos => {
          if (undefined) { throw repos }
          // save the repo information in the database
          repos.forEach(repo => { db.saveRepo(repo) });
          //return them to the Client
          res.send(repos);
        })
        .error( err => res.send(err) )
        .catch( repos => res.send(repos) )
      } else {
        //return the repos to the client
        res.send(foundRepos);
        }
    })
    .error( err => res.send(err) );
});

app.get('/repos', function (req, res) {
  db.loadIt()
    .then( foundRepos => {
      res.send(foundRepos);
    })
    // .error( err => console.log(err) );
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
