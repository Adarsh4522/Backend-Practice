let fs = require('fs');
const readStream=fs.createReadStream("Example.txt","utf-8");

readStream.on('data', (chunks)=> {
    console.log('received chunk',chunks);
});

readStream.on('end', ()=> {
    console.log('finished reading');
});

readStream.on('error', (err)=> {
    console.log('Error', err);
});