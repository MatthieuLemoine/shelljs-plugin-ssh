#!/usr/bin/env node
var ssh  = require('ssh2-client');
var argv = require('yargs').argv;

var HOST = argv.host;

ssh
  .shell(HOST)
  .then(function onOutput(output) {
    process.stdout.write(output.out);
    process.stderr.write(output.error);
  })
  .catch(function onError(err) {
    process.stderr.write(err);
  });
