require('../index');
var shell = require('shelljs');

var result = shell.ssh('junk@localhost', 'ls -l');

console.log(result.out);
console.error(result.error);
