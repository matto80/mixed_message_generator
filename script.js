// a small app to print a randomized message each time it is run.


// get lists of words from text files

const fs = require('fs')

let nouns = fs.readFileSync('nouns.txt', 'utf-8',  (err, data) => {
    if (err) throw err;
    
    return data;
})

nouns = nouns.split("\n");

let verbs = fs.readFileSync('verbs.txt', 'utf-8',  (err, data) => {
    if (err) throw err;
    
    return data;
})

verbs = verbs.split("\n");

let adjectives = fs.readFileSync('adjectives.txt', 'utf-8',  (err, data) => {
    if (err) throw err;
    
    return data;
})

adjectives = adjectives.split("\n");


// print a random string using a word from each list

let n = Math.floor(Math.random() * nouns.length);
let v = Math.floor(Math.random() * verbs.length);
let a = Math.floor(Math.random() * adjectives.length);

console.log(`${nouns[n]}, ${verbs[v]}, ${adjectives[a]}`);
//console.log(nouns);
