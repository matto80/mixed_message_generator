// a small app to print a randomized message each time it is run.


// get list of words from text files

const fs = require('fs')

let nouns = fs.readFile('nouns.txt', 'utf-8',  (err, data) => {
    if (err) throw err;

    return data;
})

console.log(typeof(nouns));
