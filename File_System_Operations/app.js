/*const fs = require('fs')
// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);

    else console.log('Require', files);
})*/

const fileHandler = require('./file');

fileHandler.writeFile('test.txt', 'Hello, Node!');
console.log(fileHandler.readFile('test.txt')); // Hello, Node!