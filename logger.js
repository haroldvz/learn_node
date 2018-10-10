const EventEmmiter = require('events');//uppercase is a standar to name CLASS (EventEmmiter is a class)
const emitter = new EventEmmiter();


var ulr = 'http://mylogger.io/log';

function log(message){
  console.log(message);
}

emitter.emit('messageLoggedNEW', {id:1, url: 'http://'});//raise an event

//export as log
module.exports = log;
//export as url
//module.exports.url = url;
