#! /usr/bin/env node
const os = require('os');
const { spawn } = require('child_process');

const name = process.argv[2];
if (!name || name.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
  return console.log(`
  Invalid directory name.
  Usage: create-express-api name-of-api  
`);
}

const repoURL = 'https://github.com/arctdav/react-web-firebase-starter.git';

runCommand('git', ['clone', repoURL, name])
  .then(() => {
    return runCommand('rm', ['-rf', `${name}/.git`]);
  }).then(() => {
    return runCommand('rm', ['-rf', `${name}/index.js`]);
  }).then(() => {
    console.log('Installing dependencies...');
    // return runCommand('npm', ['install'], {
    return runCommand('npm', ['--version'], {
      cwd: process.cwd() + '/' + name
    });
  }).then(() => {
    console.log('Done! 🏁');
    console.log('');
    console.log('To get started:');
    console.log('cd', name);
    console.log('firebase init');
    if (os.platform() === 'win32') { // process.platform was undefined for me, but this works
      execSync(`taskkill /F /T /PID ${process.pid}`); // windows specific
    } else {
      process.kill();
    }
  });

function runCommand(command, args, options = undefined) {
  var windowsEnvironment = process.platform === "win32";
  if (windowsEnvironment) {
    var command = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';
  } else {
    var command = 'npm'
  }
  const spawned = spawn(command, args, options)
    .on('error', function (err) { throw err });

  return new Promise((resolve) => {
    spawned.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    spawned.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    spawned.on('close', () => {
      resolve();
    });
  });
}