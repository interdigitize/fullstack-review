const mongoose = require('mongoose');

// mongoose.Promise = require('bluebird');
  // assert.equal(query.exec().constructor, require('bluebird'));

// mongoose.Promise = require('q').Promise;
  // assert.ok(query.exec() instanceof require('q').makePromise);

mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});

let repoSchema = mongoose.Schema({
  owner: String,
  id: Number,
  name: String,
  html_url: String,
  description: String,
  updated_at: String,
  watchers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let saveRepo = (repo) => {
  var newRepo = new Repo(repo);
  newRepo.save( (err, repo) => {
    if (err) return console.error(err);
  });
}

let checkExists = (username, callback) => {
  Repo.find({
    owner: username
  })
  .limit(25)
  .exec(callback)
}



module.exports.saveRepo = saveRepo;
module.exports.checkExists = checkExists;
