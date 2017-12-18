// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return null;
    } 
    return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = array => array.length === 0 ? 0 : array[0] + sum(array.slice(1));

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = array => {
    var flatten = array => 
        array.reduce((flattened, nextVal) => 
            flattened.concat(Array.isArray(nextVal) ? flatten(nextVal) : nextVal), []);
    var arrArr = flatten(array);
    return arrArr.length === 0 ? 0 : arrArr[0] + arraySum(arrArr.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
    if(n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else if (n > 0) {
        return isEven(n - 2);
    } else if (n < 0) {
        return isEven(n + 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 0) {
        return 0;
    } else if (n > 0) {
        return (n - 1) + sumBelow(n - 1);
    } else if (n < 0) {
        return (n + 1) + sumBelow(n + 1);
    }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    if (x === y || x + 1 === y || x - 1 === y) {
        return [];
    } else if (x < y) {
        return [x + 1].concat(range(x + 1, y));
    } else if (x > y) {
        return [x - 1].concat(range(x - 1, y));
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    //exponent = base times itself exp number of times
    if (exp === 0) {
        return 1;
    } else if (exp > 0) {
        return base * exponent(base, exp - 1);
    } else if (exp < 0) {
        return 1 / (base * exponent(base, -(exp) - 1));
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 1) {
        return true;
    } else if (n === 2) {
        return true;
    } else if (n < 2 && n > 1 || n === 0) {
        return false;
    }
    return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if (string.length === 1) {
        return string[0];
    }
    return reverse(string.substr(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, workingString = string.replace(/\s/g,'').toUpperCase(), boolArr = [], i = 0) {
  if (boolArr.length === Math.floor(workingString.length / 2)) {
    return true;
  } else if (workingString[i] === workingString[(workingString.length - 1) - i]) { 
    boolArr.push(true);
  } else {
    return false;
  }
  return palindrome(string, workingString, boolArr, ++i);
};


// (OPTIONAL) 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (x > 0) {
        return x < y ? x : modulo(x - y, y);
    } else if (x < 0) {
        if (y > 0) {
            return -x < y ? x : modulo(x + y, y);
        } else if (y < 0) {
            return x > y ? x : modulo(x - y, y);
        }  
    } else if (y === 0) {
      return NaN;
    } else {
      return 0;
    }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = (x, y, product = 0) => {
  if (x === 0 || y === 0) {
    return product;
  } else if (x < 0 && y < 0) {
    var newY = -y;
    var newX = -x;
    return multiply(newX, --newY, product += newX);
  } else if (y > 0) {
    return multiply(x, --y, product += x);
  } else if (y < 0) {
    return multiply(--x, y, product += y);
  } 
};

// (OPTIONAL) 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, quotient = 0) {
    if (y === 0) {
        return NaN;
    } else if (x === 0) {
        return quotient;
    } else if (x < 0 && y < 0) {
        return -x < -y ? quotient : divide(-x - -y, y, ++quotient);
    } else if (x > 0) {
        return x < y ? quotient : divide(x - y, y, ++quotient);
    } else if (x < 0 || y < 0) {
        return x < y ? quotient : divide(x + y, y, ++quotient);
    }
};

// (OPTIONAL) 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x < 0 || y < 0) {
        return null;
    } else if (x === y) {
        return x;
    } else if (x > y) {
        return gcd(x - y, y);
    } else {
        return gcd(x, y - x);
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, boolArr = [], i = 0) {
    if (boolArr.length === str1.length && str1.length === str2.length) {
        return true;  
    } else if (str1[i] === str2[i]) {
        boolArr.push(1);
    } else {
        return false;
    }
    return compareStr(str1, str2, boolArr, ++i);
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    if (str.length === 0) {
        return [];
    } 
    return [str[0]].concat(createArray(str.substr(1)));
};

// 17. Reverse the order of an array
// var reverseArr = function (array) {
//     if (array.length === 0) {
//         return [];
//     }
//     return reverseArr(array.slice(1)).concat(array[0]);
// };

var reverseArr = array => array.length === 0 ? [] : reverseArr(array.slice(1)).concat(array[0]);

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = (value, length) => length === 0 ? [] : [value].concat(buildList(value, length - 1));

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, valArr = []) {
    if (array.length === 0) {
        return valArr.length;
    } else if (array[0] === value) {
        valArr.push(1);
    } 
    return countOccurrence(array.slice(1), value, valArr);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = (array, callback, resArr = [], i = 0) => 
    i === array.length ? resArr : rMap(array, callback, resArr.concat(callback(array[i], i, array)), ++i);



// (OPTIONAL) 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, objKeys = Object.keys(obj), res = 0) {
    if (objKeys.length === 0) {
        return res;
    } else if (objKeys[0] === key) {
        return countKeysInObj(obj, key, objKeys.slice(1), ++res);
    } else if (typeof obj[objKeys[0]] === "object") {
        return countKeysInObj(obj[objKeys[0]], key, objKeys, res);
    } else {
        return countKeysInObj(obj, key, objKeys.slice(1), res);
    }
};

// (OPTIONAL) 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// (OPTIONAL) 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// (OPTIONAL) 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, res = [0], num = 1, i = 0) {
    if (n === 0 || n < 0) {
        return null;
    } else if (i === n) {
        return res;
    }
    return fibonacci(n, res.concat(num), num += res[i], ++i);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, res = [0], num = 1, i = 0) {
    if (n < 0) {
        return null;
    } else if (i === n) {
        return res[n];
    }
    return nthFibo(n, res.concat(num), num += res[i], ++i);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = input => input.length === 0 ? [] : [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));


// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = array => array.length === 0 ? [] : [`${array[0][0].toUpperCase()}${array[0].slice(1)}`].concat(capitalizeFirst(array.slice(1)));

// (OPTIONAL) 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// (OPTIONAL) 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = arrays => {
    return arrays.reduce((flattened, nextVal) => {
        return flattened.concat(Array.isArray(nextVal) ? flatten(nextVal) : nextVal);
    }, []);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
    if (str.length === 0) {
        return obj;
    }
    obj[str[0]] ? obj[str[0]] += 1 : obj[str[0]] = 1;
    return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, compressedList = []) {
    if (list.length === 0) {
        return compressedList;
    } else if (list[0] === compressedList[compressedList.length - 1]) {
        return compress(list.slice(1), compressedList);
    } else {
        return compress(list.slice(1), compressedList.concat(list[0]));
    }
};

// (OPTIONAL) 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, resArr = []) {
    if (array.length === 0) {
        return resArr;
    } else if (array[0] === 0 && resArr[resArr.length - 1] === 0) {
        return minimizeZeroes(array.slice(1), resArr);
    } else {
        return minimizeZeroes(array.slice(1), resArr.concat(array[0]));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, resArr = []) {
    if (array.length === 0) {
        return resArr;
    } else if (resArr[resArr.length - 1] > 0) {
        if (array[0] < 0) {
            return alternateSign(array.slice(1), resArr.concat(array[0]));
        } else {
            return alternateSign(array.slice(1), resArr.concat(-array[0]));
        }
    } else {
        return alternateSign(array.slice(1), resArr.concat(Math.abs(array[0])));
    }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, resStr = '') {
    if (str.length === 0) {
        return resStr;
    } else if (+str[0] === 1) {
        return numToText(str.slice(1), resStr.concat('one'));
    } else if (+str[0] === 2) {
        return numToText(str.slice(1), resStr.concat('two'));
    } else if (+str[0] === 3) {
        return numToText(str.slice(1), resStr.concat('three'));
    } else if (+str[0] === 4) {
        return numToText(str.slice(1), resStr.concat('four'));
    } else if (+str[0] === 5) {
        return numToText(str.slice(1), resStr.concat('five'));
    } else if (+str[0] === 6) {
        return numToText(str.slice(1), resStr.concat('six'));
    } else if (+str[0] === 7) {
        return numToText(str.slice(1), resStr.concat('seven'));
    } else if (+str[0] === 8) {
        return numToText(str.slice(1), resStr.concat('eight'));
    } else if (+str[0] === 9) {
        return numToText(str.slice(1), resStr.concat('nine'));
    } else {
        return numToText(str.slice(1), resStr.concat(str[0]));
    }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
