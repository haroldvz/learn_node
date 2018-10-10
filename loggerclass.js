const EventEmmiter = require('events');//uppercase is a standar to name CLASS (EventEmmiter is a class)

class Logger extends EventEmmiter {
	
	log(message){
	  console.log(message);
	  //raise event
	  this.emit('messageLoggedNEWClass', {id:1, url: 'http://'});//raise an event
	}

}
module.exports = Logger;