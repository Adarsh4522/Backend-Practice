const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

eventEmitter.on('task1', ()=> {
    console.log('task1');
});

eventEmitter.on('task2', ()=> {
    console.log('task2');
});

eventEmitter.emit('task1');

////setTimeout(function() {
    //eventEmitter.emit('task2');

//},5000);

setTimeout(function() {
    eventEmitter.emit('task2');
},3000);

