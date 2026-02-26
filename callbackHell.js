let fs = require('fs');
let file = "Example.txt";

fs.exists(file, function(exists) {
    if(exists) {
        fs.stat(file, function(err, stat){
       
            if(err) {throw error;

            }
            if(stat.isFile()) {
                fs.readFile(file, "utf-8", function(err,data) {
                    if(err){throw err;}
                    console.log(data);
                });
            }

        });
    }
});