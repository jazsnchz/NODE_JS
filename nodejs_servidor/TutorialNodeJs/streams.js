//LERR
const readable = new stream.Readable();

readable.isPaused() // === false
readable.pause()
readable.isPaused() // === true
readable.resume()
readable.isPaused() // === false
//ESCRIBIR
const Writable = require('stream').Writable;
const myStream = new Writable();
myStream.write('somea'); 
myStream.write('somee data'); 
myStream.end('doneting data');
//Duplex
a.pipe(b).pipe(a);                 