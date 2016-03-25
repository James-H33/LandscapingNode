var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 27017;
var portIP = process.env.IP;



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.render('index');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.get('/services', function(req, res) {
  res.render('services');
});

// app.listen(process.env.PORT, process.env.IP, function() {
//   console.log("Server has started..");
// });

app.listen(port, portIP, function() {
  console.log('Server has started..')
});
