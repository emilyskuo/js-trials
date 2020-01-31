"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(items[i], i);
  }
  
}
// printIndices(["apple", "berry", "cherry"]);

// 2. everyOtherItem
function everyOtherItem(items) {
    const result = []
    for (const i in items) {
      if (i % 2 == 0) {
        result.push(items[i]);
      } //end if
    } // end for
    return result;
} //end function

// console.log(everyOtherItem(["apple", "berry", "cherry"]));

// 3. smallestNItems
function smallestNItems(items, n) {
  let sortedList = items.sort((a, b) => a - b); 
  sortedList = sortedList.slice(0, n);
  console.log(sortedList.sort((a, b) => b - a));
}

smallestNItems([1, 5, 4, 2, 3], 3)