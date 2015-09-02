var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var execs = require('./json/execs');
var events = require('./json/events/2014.json');

app.use('/vendor', express.static('./bower_components'));
app.use('/assets', express.static('./dist'));

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function (req, res) {
  fs.readdir('./dist/images/sponsors',function(err,files){
    if(err) throw err;
    res.render('index', { title: 'Galbraith Society', sponsors: files});
  });
});

app.get('/events', function (req, res) {
  res.render('events', { title: 'Events', events: events});
});

app.get('/contact', function (req, res) {
  res.render('contact', { title: 'Contact', execs: execs});
});

app.listen('4000', function(){
	console.log('listening on 4000');
});