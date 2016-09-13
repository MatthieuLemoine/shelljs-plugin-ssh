require('../index');
var shell = require('shelljs');

shell.ssh('junk@localhost', {
  // Enable interactive password input
  promptPassword : true
});
