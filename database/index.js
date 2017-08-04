const mongoose = require('mongoose');
const Promise = require('bluebird')
Promise.promisifyAll(mongoose);

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
  url: String,
  description: String,
  updatedat: String,
  watcherscount: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let saveRepo = (repo) => {
  var newRepo = new Repo(repo);
  newRepo.save( (err, repo) => {
    if (err) return console.error(err);
  });
};

let checkExists = (checkThis) => {
  return Repo.findAsync(checkThis);
}

let loadIt = () => {
  return Repo.find({}).sort({'updatedat': 'desc'}).limit(25).exec();
}


module.exports.saveRepo = saveRepo;
module.exports.checkExists = checkExists;
module.exports.loadIt = loadIt;
