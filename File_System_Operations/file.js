/* When you need to write, read, or manage files - like logs, user 
uploads, or data storage */

const fs = require('fs');

function readFile(path) {
  return fs.readFileSync(path, 'utf8');
}

function writeFile(path, data) {
  fs.writeFileSync(path, data, 'utf8');
}

module.exports = { readFile, writeFile };