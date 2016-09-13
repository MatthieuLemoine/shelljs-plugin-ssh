# shelljs-plugin-ssh

[![shelljs-plugin](https://img.shields.io/badge/shelljs-plugin-brightgreen.svg?style=flat-square)](https://github.com/shelljs/shelljs/wiki/Using-ShellJS-Plugins)

A ssh plugin for shelljs.

## Install

	npm i shelljs-plugin-ssh

## Usage

- Execute a command on a remote host : ``ssh(HOST, command, opts)``
- Open a live shell on a remote host : ``ssh(HOST, opts)``

## Options

- **host** - _string_ - Hostname or IP address of the server.
- **port** - _integer_ - Port number of the server. **Default:** `22`
- **username** - _string_ - Username for authentication.
- **password** - _string_ - Password for password-based user authentication.
- **privateKey** - _mixed_ - _Buffer_ or _string_ that contains a private key for either key-based or hostbased user authentication (OpenSSH format).
- **passphrase** - _string_ - For an encrypted private key, this is the passphrase used to decrypt it.

See [ssh2 client config options](https://github.com/mscdex/ssh2/#client-methods) for more.

## Examples

```javascript
require('shelljs-plugin-ssh');

const HOST = 'junk@localhost';

// Exec command over ssh
const { out, error } = ssh(HOST, 'ls -l');

// Enable interactive password input
const { out, error } = ssh(HOST, 'ls -l', {
	promptPassword : true
});

// Setup a live shell on remote host
ssh(HOST);

// Enable interactive password input
ssh(HOST, {
	promptPassword : true
});
```
