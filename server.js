const express = require('express');
const path = require('path');
const ejs = require('ejs');
const run = require('./run.js')
const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
  run.foo('TEST');
});

// TODO: 
app.get('/getApiKey', function(req, res) {
  var key = {
    
  };
  
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(key));
});

app.listen(8000,()=>{
  console.log("http://localhost:8000");
});

