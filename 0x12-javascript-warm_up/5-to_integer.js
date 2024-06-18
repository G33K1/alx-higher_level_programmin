#!/usr/bin/node

const arg = process.argv;

if (isNaN(arg[2])) {
  console.log('not a number');
} else {
  console.log('My number is: ' + parseInt(arg[2]));
}
