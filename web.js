var gzippo = require('gzippo');
var express = require('express');
var app = express();
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

var wwwhisper = require('connect-wwwhisper');
// app holds a reference to express or connect framework, it
// may be named differently in your source file.
app.use(wwwhisper());

// Alternatively, if you don't want wwwhisper to insert
// a logout iframe into HTML responses use.
app.use(wwwhisper(false));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);