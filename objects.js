"use strict";


// 1. countWords
function countWords(phrase) {
  const words = {};
  const list = phrase.split(' ');
  
  for(let word of list){
    
    if (words[word] == undefined) {
      //console.log(word);
      words[word] = 1;
    }
    else {
      console.log(word);
      words[word] += 1;
    }
  }

  return words;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
