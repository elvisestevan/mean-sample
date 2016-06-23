var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');

mongoose.connect(configDB.url);

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(methodOverride());
app.use(bodyParser.json());

var port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

io.on('connection', function(socket) {
  console.log('A user has connected!');
  socket.on('disconnect', function() {
    console.log('A user has disconnected');
  });
});

app.get('/', function (req, res) {
  res.render('index.ejs');
});

var api = express.Router();
require('./server/routes/api')(api);
app.use('/api', api);

app.get('/*', function (req, res) {
  res.render('index.ejs');
});

http.listen(port, function() {
  console.log('Server running... port: ' + port);
});
