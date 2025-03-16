// (function (exports, require, module, __filename, __dirname){

const EventEmitter = require('events')
// console.log(__filename);
// console.log(__dirname)

var url = 'https://www.tech.home/log'

class Logger extends EventEmitter{
    log(message){
        console.log(message)
    
        this.emit('messageLogged', {id: 1, url: 'http://quickshoot.netlify.app'})
    }
}

module.exports = Logger;

