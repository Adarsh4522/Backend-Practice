const fs = require('fs');
const zlib = require('zlib');

const fileContent = fs.readFileSync('Example.txt', 'utf-8');

zlib.gzip(fileContent, (err, compressedData)=> {
    if(err) {
        console.error('Error compressing a file', err);
        return;
    }

    fs.writeFileSync('Example.txt.gz', compressedData);
    console.log('File compressed successfully');
});
