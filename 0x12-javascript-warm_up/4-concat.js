#!/usr/bin/node

const arg = process.argv;

if (arg[3] === undefined) {
  console.log(arg[2] + ' is undefined');
} else {
  console.log(arg[2] + ' is ' + arg[3]);
}
