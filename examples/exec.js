require('../index');
var shell = require('shelljs');

var result = shell.ssh('junk@localhost', 'ls -l', {
  // Enable interactive password input
  promptPassword : true
});

console.log(result.out);
console.error(result.error);
