const express = require('express');
const path = require('path');
const ejs = require('ejs');
const cmd = require('./run.js');
const firebase = require('./firebase.js');
const mailer = require('./mailer.js');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT||8000;
const IP = process.env.IP;
// const request = require('request');
const slack = require('./slack.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

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

// app.post('/create_inventory', function(req, res){
//   let body = req.body;
//   console.log(body);
//   res.send('INVENTORY CREATED');
// });

app.get('/send_inventory', function(req, res){
  var request = req.query;
  console.log(request);
  var user_id = request.user_id;
  
  firebase.getInventory(user_id, function(data){
    data = beautifyData(data);
    if ( data == 'null' ) data = '`INVENTORY is empty.`';
    res.send( '' );
   
    var msg = `INVENTORY: ${request.user_name}\n` + data ;
    slack.sendMessage( msg );
  });
});

app.get('/view_inventory', function(req, res){
  var request = req.query;
  var user_id = request.user_id;

  firebase.getInventory(user_id, function(data){
    data = beautifyData(data);
    if ( data == 'null' ) data = '`INVENTORY is empty.`';
    res.send( data );
  });
});

app.get('/updateInventory', function(req, res){
  var request = {
    'user_id': 'SAMPLE_ID',
    items: {
     'BOX': '1',
     'BOTTLES': '5'
    }
  };
  //var request = req.body;
  firebase.updateInventory(request, function() {
    //res.send('Inventory Updated Successfully!');
  });
});

app.post('/slackUpdateInventory', function(req, res) {
  var request = req.body;
  parseArguements(request.text).then(arg=>{
    var updateRequest = {};
    updateRequest['user_id'] = request.user_id;
    updateRequest['items'] = arg;
  
    firebase.updateInventory(updateRequest, function() {
      firebase.getInventory(updateRequest['user_id'], function(data){
        data = beautifyData(data);
        res.send(data);
      });
    });
  });
  
});

app.listen(PORT,IP,()=>{
  console.log(`${IP}:${PORT}`);
});

async function parseArguements(arg) {
  var arr = arg.split(", ");
  var n = arr.length;
  var ob = {},
      item, key, value;
  for(var i=0;i<n;i++) {
    item = arr[i].split(':');
    key = item[0].trim();
    value = item[1].trim();
    ob[key] = value;
  }
  
  return await ob;
  
}

function beautifyData(data) {
  if(data == 'undefined') return 'null';
  data = JSON.stringify(data);
  data = data.replace(/,/g, "\n");
  data = data.replace(/[{"}]/g, "");
  data = data.replace(/:/g, ": ");
  return data;
}

// HOW TO EXECUTE TERMINAL COMMANDS
// cmd.run('command', function(data) {
//     console.log(">OUTPUT:");
//     console.log(data);
//   });
