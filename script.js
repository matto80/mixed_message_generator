// a small app to print a randomized message each time it is run.


// get list of words from text files

const fs = require('fs')

let nouns = fs.readFileSync('nouns.txt', 'utf-8',  (err, data) => {
    if (err) throw err;
    
    return data;
})

nouns = nouns.split("\n");
console.log(nouns);
