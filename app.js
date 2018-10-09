const path = require('path');
const os = require('os');
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
