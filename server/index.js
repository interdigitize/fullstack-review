const express = require('express');
const bodyParser = require('body-parser')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.post('/repos', function (req, res) {
  console.log(req.body);
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.end()
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
