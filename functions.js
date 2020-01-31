"use strict";


// 1. isHometown
function isHometown(town) {
  const homeTown = 'Saratoga';
  if (homeTown == town){
    return true;
  }
  else {
    return false;
  }


}


// 2. getFullName

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}


// 3. calculateTotal

function calculateTotal(basePrice, state, tax = 0.05) {
  let subtotal = basePrice * (1 + tax);
  let fee = 0;
  if (state == 'CA') {
    fee = 0.03 * subtotal;
  } // end CA if
  else if (state == 'PA') {
    fee = 2;
  } // end PA if
  else if (state == 'MA') {
    if (basePrice <= 100) {
      fee = 1;
    } // end MA < 100 if
    else {
      fee = 3;
    } // end MA else
  } // end MA 

  return subtotal + fee;
} // end function
