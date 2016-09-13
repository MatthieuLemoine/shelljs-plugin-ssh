var plugin   = require('shelljs/plugin');
var spawn    = require('child_process').spawnSync;
var path     = require('path');

function sshCommand(options, host, cmd, sshOpts) {
  var child;
  var opts = {
    encoding : 'utf8'
  };
  sshOpts = sshOpts || {};
  if (cmd && typeof cmd === 'object') {
    sshOpts = cmd;
    cmd = null;
  }
  if (sshOpts.promptPassword) {
    // FIXME Ugly hack to retrieve password on stderr
    opts.stdio = [process.stdin, process.stdout, 'pipe'];
    var promptPassword = spawn(path.join(__dirname, '/bin/ask-password.js'), opts);
    sshOpts.password = promptPassword.stderr;
  }
  if (cmd) {
    opts.stdio = 'pipe';
    child = spawn(path.join(__dirname, '/bin/exec.js'), ['--host=' + host, '--cmd=' + cmd, '--opts=' + JSON.stringify(sshOpts)], opts);
  } else {
    opts.stdio = 'inherit';
    child = spawn(path.join(__dirname, '/bin/shell.js'), ['--host=' + host,  '--opts=' + JSON.stringify(sshOpts)], opts);
  }
  return {
    out   : child.stdout,
    error : child.stderr
  };
}

plugin.register('ssh', sshCommand, {
  cmdOptions : {}
});
