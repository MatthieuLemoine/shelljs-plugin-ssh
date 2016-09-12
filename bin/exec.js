#!/usr/bin/env node
var ssh  = require('ssh2-client');
var argv = require('yargs').argv;

var HOST = argv.host;
var CMD  = argv.cmd;

ssh
  .exec(HOST, CMD)
  .then(function onOutput(output) {
    process.stdout.write(output.out);
    process.stderr.write(output.error);
  })
  .catch(function onError(err) {
    process.stderr.write(err);
  });
