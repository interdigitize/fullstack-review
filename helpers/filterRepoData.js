const gitHub = require('../helpers/github');

var repoFilter = function (name) {
  return gitHub.getReposByUsername(name)
    .then ( data => {
      var filteredData = [];
      data = Array.from(data.data);
      data.forEach( repo => {
        var objToSave = { owner: name};
        objToSave.id = repo.id;
        objToSave.name = repo.name;
        objToSave.description = repo.description;
        objToSave.url = repo.html_url;
        objToSave.updatedat = repo.updated_at;
        objToSave.watchcount = repo.watchers_count;
        filteredData.push(objToSave);
      })
      return filteredData;
    })
    .catch( error => {
      console.error(error);
    })

}

module.exports.repoFilter = repoFilter;
