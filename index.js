var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var execs = require('./json/execs');

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

app.get('/rex', function (req, res) {
  fs.readdir('./json/projects',function(err,years){
    if(err) throw err;
    var latest = years.slice(-1).toString().split('.')[0];
    res.redirect('/rex/' + latest);
  });  
});

app.get('/rex/:year', function (req, res) {
  var year = req.params.year;
  var render = require('./json/projects/' + year + '.json');
  fs.readdir('./json/projects',function(err,years){
    if(err) throw err;
    res.render('rex', { title: 'REX', projects: render, years: years, thisYear: year});
  });  
});

app.get('/rex/:year/:project', function (req, res) {
  var projects = require('./json/projects/' + req.params.year + '.json');
  var id = req.params.project;
  projects.forEach(function(project){
    if (project.id == id){
      res.render('project', { title: 'REX', project: project});      
    }
  })
});

app.get('/events', function (req, res) {
  fs.readdir('./json/events',function(err,years){
    if(err) throw err;
    var latest = years.slice(-1).toString().split('.')[0];
    res.redirect('/events/' + latest);
  });
});

app.get('/events/:year', function (req, res) {
  var year = req.params.year;
  var render = require('./json/events/' + year + '.json');
  fs.readdir('./json/events',function(err,years){
    if(err) throw err;
    res.render('events', { title: 'Events', events: render, years: years, thisYear: year});
  });
});


app.get('/journal', function (req, res) {
  res.render('journal', { title: 'Undergraduate Journal'});
});


app.get('/contact', function (req, res) {
  res.render('contact', { title: 'Contact', execs: execs});
});

app.listen(process.env.PORT || 3000, function(){
	console.log('listening');
});