var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/user', (request, response) => {
  // used when you have to get info from db
  response.send('Hi! Sanchit from a GET API');
});

app.post('/user', (request, response) => {
  // used when you have to create info into db
  const name = request.body.name;
  response.send('Hi! ' + name + ' from a POST API');
})

app.put('/user', (request, response) => {
  // used when you have to manipulate data in db
  const name = request.body.name;
  response.send('Hi! ' + name + ' from a PUT API');
})

app.delete('/user', (request, response) => {
  // used when you have to delete data in db
  response.send('Hi! from a delete API');
})

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 5000
app.listen(port, function () {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
