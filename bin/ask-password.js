#!/usr/bin/env node
var inquirer = require('inquirer');

inquirer.prompt([{
  type    : 'password',
  name    : 'password',
  message : 'Input password'
}]).then(function onAnswers(answers) {
  // FIXME Ugly hack to retrieve password on stderr
  process.stderr.write(answers.password);
});
