buf = new Buffer(256);
len = buf.write("POO");

console.log("octetos : "+  len)



buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));    
console.log( buf.toString('ascii',0,5));

//concatenacion de buffers
var buffer1 = new Buffer('Hola a todos');
var buffer2 = new Buffer('como estan ?');
var buffer3 = Buffer.concat([buffer1,buffer2]);