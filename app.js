const path = require('path');
const os = require('os');
const fs = require('fs');


const EventEmmiter = require('events');//uppercase is a standar to name CLASS (EventEmmiter is a class)

const emitter = new EventEmmiter();

//----------------
//IMPORTANT, FIRST I HAVE TO DEFINE THE LISTENER, CAUSE WHEN THE EMIT IS CALLED, THEN THE LISTENERS ARE CALLED SYNCH
//listener is a function that call wen event is raise
emitter.on('messageLogged',function(){
	console.log('Listener called');
});

emitter.emit('messageLogged');//raise an event
//--------------


emitter.on('messageLoggedNEW',(args)=>{//other way
	console.log('messageLoggedNEW Listener called',args);
});

//emitter.emit('messageLoggedNEW', {id:1, url: 'http://'});//raise an event
//--------------

const log = require('./logger.js');
log('message');

//---
const Logger = require('./loggerclass.js');
const logger = new Logger();

logger.on('messageLoggedNEWClass',(args)=>{//other way
	console.log('messageLoggedNEWClass Listener called',args);
});

logger.log('messageclass');
//----
/*
const logger = require('./logger.js');//best practice to store as constant
console.log(logger);
logger('hi');
console.log(module);*/

var totalMemory = os.totalmem();
var freememory = os.freemem();

var pathObj = path.parse(__filename);
console.log(pathObj);
console.log('Total memory '  + totalMemory);
console.log(`Total memory: ${totalMemory} and free ${freememory}`);


//fs.access()//defect asynchronus, also exits accessSync for synchronus request
var files = fs.readdirSync('./');
console.log(files);

fs.readdir('$',function(err,response){
	if(err) console.log('Error',err);
	else console.log('Result',response)
});

fs.readdir('./',function(err,response){
	if(err) console.log('Error',err);
	else console.log('Result',response)
});