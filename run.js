const cmd = require('node-cmd');

module.exports = {
  foo: function () {
    // whatever
    
    console.log("TEST");
  },
  bar: function () {
    // whatever
  },
  run: function() {
    cmd.get(
      'pwd',
      function(err, data, stderr) {
        console.log('the current working dir is : ',data)
      }
    )
  }
};