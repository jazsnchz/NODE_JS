var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('jecucion del primer listner');
}
// Bind the connection event with the listner1 function
eventEmitter.addListener('conectado', listner1);
