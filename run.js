const cmd = require('node-cmd');

module.exports = {
  foo: function () {
    // whatever
    
    console.log("TEST");
  },
  bar: function () {
    // whatever
  },
  test: function() {
    cmd.get(
      'python script.py',
      function(err, data, stderr) {
        console.log('the current working dir is : ',data);
      }
    )
  },

  run: function(command, callback) {
    cmd.get(command, function(err, data, stderr) {
      if(stderr) console.log(stderr);
      callback(data);
    });
  }
};