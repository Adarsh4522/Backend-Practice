const fs = require('fs');
fs.readFile('data.json', "utf-8",(err,data)=> {
    if(err) {
        console.error('error reading', err);
        return;
    }
    try {
        const obj = JSON.parse(data);
        console.log('Parsed object',obj);

        console.log('Name: ',obj.name)
        
    }

    catch(parseErr) {
        console.log('Error parsing JSON: ',parseErr);
    }
});