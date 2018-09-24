const express = require('express');
const path = require('path');
const ejs = require('ejs');
const cmd = require('./run.js');
const mailer = require('./mailer.js');
const app = express();
const PORT = process.env.PORT||8000;
const IP = process.env.IP||'127.0.0.1';

app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
  // mailer.mail();
  // cmd.run('curl -o weatherdata.json -k https://ef5128a4-86b4-47b8-b14f-a0cd74abf0ef:MwN42ReQZ9@twcservice.mybluemix.net:443/api/weather/v1/geocode/9.596478/76.522653/forecast/daily/3day.json', function(data) {
  //   console.log(data);
  // });
  // cmd.run('curl -o data.json -k https://ef5128a4-86b4-47b8-b14f-a0cd74abf0ef:MwN42ReQZ9@twcservice.mybluemix.net:443/api/weather/v1/geocode/9.596478/76.522653/forecast/daily/3day.json', function(data) {
  //   console.log('completed');  
  // });
});

// TODO: 
app.get('/getApiKey', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({key : 'AIzaSyBzAaIGJ44drCpI0VYw0L4HOMc6UZIQXkY'}));
});

app.get('/chat',(req,res)=>{
  res.render('chat.html');
  
});

app.listen(PORT,IP,()=>{
  console.log(`${IP}:${PORT}`);
});


// HOW TO EXECUTE TERMINAL COMMANDS
// run.run('command', function(data) {
//     console.log(">OUTPUT:");
//     console.log(data);
//   });
