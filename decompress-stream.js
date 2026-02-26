const fs = require('fs');
const zlib = require('zlib');

const compressedData = fs.readFileSync('Example.txt.gz');

zlib.unzip (compressedData,(err, decompressedData)=> {
    if(err) {
        console.error('Example.txt.gz', err);
        return;
    }
    fs.writeFileSync('sample.txt', decompressedData);
    console.log('File decompressed Successfully');
});