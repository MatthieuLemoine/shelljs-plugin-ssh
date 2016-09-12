var plugin = require('shelljs/plugin');
var spawn  = require('child_process').spawnSync;
var path   = require('path');

function sshCommand(options, host, cmd) {
  var child;
  var opts = {
    encoding : 'utf8'
  };
  if (cmd) {
    child = spawn(path.join(__dirname, '/bin/exec.js'), ['--host=' + host, '--cmd=' + cmd], opts);
  } else {
    opts.stdio = 'inherit';
    child = spawn(path.join(__dirname, '/bin/shell.js'), ['--host=' + host], opts);
  }
  return {
    out   : child.stdout,
    error : child.stderr
  };
}

plugin.register('ssh', sshCommand, {
  cmdOptions : {}
});
