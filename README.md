# shelljs-plugin-ssh

[![shelljs-plugin](https://img.shields.io/badge/shelljs-plugin-brightgreen.svg?style=flat-square)](https://github.com/shelljs/shelljs/wiki/Using-ShellJS-Plugins)

A ssh plugin for shelljs.

## Install

	npm i shelljs-plugin-ssh

## Usage

- Execute a command on a remote host : ``ssh(HOST, command)``
- Open a live shell on a remote host : ``ssh(HOST)``

## Examples

```javascript
require('shelljs-plugin-ssh');

const HOST = 'junk@localhost';

// Exec command over ssh
const { out, error } = ssh(HOST, 'ls -l');

// Setup a live shell on remote host
ssh(HOST);
```
