// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 * 
 * RUNNING YOUR CODE:i
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#range"
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    var arr = [];
    if (start < end) {
        for (var i = start; i <= end; i++) {
            arr.push(i);
        }
    } else {
        for (var j = start; j >= end; j--) {
            arr.push(j);
        }
    }
    return arr;
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}