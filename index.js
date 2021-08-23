#! /usr/bin/env node
const os = require('os');
const spawn = require('child_process').spawn;

const name = process.argv[2];
if (!name || name.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
  return console.log(`
  Invalid directory name.
  Usage: create-express-api name-of-api  
`);
}

const repoURL = 'https://github.com/arctdav/react-web-firebase-starter.git';
console.log('cwd: ', process.cwd() )
runCommand('git', ['clone', repoURL, name])
  .then(() => {
    return runCommand('rm', ['-rf', `${name}/.git`]);
  }).then(() => {
    return runCommand('rm', ['-rf', `${name}/index.js`]);
  }).then(() => {
    console.log('Installing dependencies...');
    return runCommand('npm', ['install'], {
    // return runCommand('npm', [], {
      cwd: process.cwd() + '/' + name,
      shell: true
    });
  }).then(() => {
    console.log('Done! 🏁');
    console.log('');
    console.log('To get started:');
    console.log('cd', name);
    console.log('firebase init');
  });

function runCommand(command, args, options = undefined) {
  var windowsEnvironment = process.platform === "win32";
  if (command === 'npm' && windowsEnvironment) {
    var command = 'npm.cmd'
    // var command = process.execPath
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


// const spawnTest = (() => {
//   const dir = spawn('npm.cmd', {shell: true});       // <== shell: true option

//   dir.stdout.on('data', (data) => {
//     console.log(`spawn stdout: ${data}`);
//   });

//   dir.stderr.on('data', (data) => {
//     console.log(`spawn stderr: ${data}`);
//   });

//   dir.on('error', (code) => {
//     console.log(`spawn error: ${code}`);
//   });

//   dir.on('close', (code) => {
//     console.log(`spawn child process closed with code ${code}`);
//   });

//   dir.on('exit', (code) => {
//     console.log(`spawn child process exited with code ${code}`);
//   });
// })();
