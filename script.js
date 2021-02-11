// a small app to print a randomized message each time it is run.
//
// Topic: Electronic bartender conversation.
//
// Plan:
//  End result is to have a mad-libs style generator print randomized messages
//  with minor interactivity built-in.
//
//  e.g. user runs program receives greeting message and a question
//  user responds to question and receives another message (and another question
//  repeats until user enters 'check please') todo later.


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


// create functions to get a randomized index for each list

const n = () => Math.floor(Math.random() * nouns.length);
const v = () => Math.floor(Math.random() * verbs.length);
const a = () => Math.floor(Math.random() * adjectives.length);

// make function to captitalize first letter of a string

const capitalize = string => string[0].toUpperCase() + string.slice(1);

// make interactive console user prompt

const bartender = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question(`Well howdy there ${adjectives[a()]} ${nouns[n()]}, how are you today you ${adjectives[a()]}-${nouns[n()]}? `, function(state) {
    rl.question(`${capitalize(adjectives[a()])} ${state} are you? Well, what can I ${verbs[v()]} for you? `, function(drink) {
      console.log(`All right then ${adjectives[a()]}-${nouns[n()]}, one ${adjectives[a()]} ${drink} coming right up!`);
      rl.close();
    });
  });
  
  rl.on("close", function() {
    console.log(`\n${capitalize(verbs[v()])} ${adjectives[a()]}, you ${adjectives[a()]} ${nouns[n()]}!`);
    process.exit(0);
  });
};

bartender();
