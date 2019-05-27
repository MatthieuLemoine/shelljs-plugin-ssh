#!/usr/bin/env node
var ssh  = require('ssh2-client');
var argv = require('yargs').argv;

var HOST = argv.host;
var opts = JSON.parse(argv.opts);

ssh
  .shell(HOST, opts)
  .then(function onOutput(output) {
    process.stdout.write(output.out);
    process.stderr.write(output.error);
  })
  .catch(function onError(err) {
    if (err.message) {
      process.stderr.write(err.message);
      process.stderr.write(err.stack);
    } else {
      process.stderr.write(err);
    }
  });
