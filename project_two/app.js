#! /usr/bin/env node
var userArgs = process.argv.slice(2);
var searchParam = userArgs[0];

var exec = require('child_process').exec;

var child = exec('ls -a | grep ' + searchParam, function(err, stdout, stderr) {
  if (err) throw err;
  console.log(stdout);
});
