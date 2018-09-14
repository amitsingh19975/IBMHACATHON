const cmd = require('node-cmd');

module.exports = {
  run: function(command, callback) {
    cmd.get(command, function(err, data, stderr) {
      if(stderr) console.log(stderr);
      callback(data);
    });
  }
};