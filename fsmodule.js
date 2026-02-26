let fs = require('fs');
//let data = fs.readFileSync("Example.txt");
fs.writeFile("Example.txt", "Done with fs module", ()=> {
    console.log("Done");
});