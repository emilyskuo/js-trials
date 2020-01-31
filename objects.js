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
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (melonPrices[price]) {
    return melonPrices[price];
  }
  
}

// let melonsMelon = getMelonsAtPrice(3.50);
//console.log(melonsMelon);