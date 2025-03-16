const EventEmitter = require('events')
//class == human and object == john
//create an instance of an event => const emitter = new EventEmitter();



const Logger = require('../Logger/logger')
const logger = new Logger();

//register an event -> This should appear before the emit() event not after
logger.on('messageLogged', (arg) => {
    console.log('listener called', arg);
})
logger.log('message')

//raise an event
// emitter.emit('messageLogged', 1, 'url')

//making a noise, produce-signaling
//Events arguments
// emitter.emit('messageLogged', {id:1, url: 'http://quickshoot.netlify.app'})