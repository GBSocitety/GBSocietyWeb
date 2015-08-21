var express = require('express');
var app = express();
var path = require('path');

app.use('/vendor', express.static('./bower_components'));
app.use('/assets', express.static('./dist/assets'));
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index', { title: 'hello'});
});

app.get('/team', function (req, res) {
  res.render('team', { title: 'blah' });
});

app.listen('4000', function(){
	console.log('listening on 4000');
});