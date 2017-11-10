/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {
    
};

animal.species = "lion";
animal["name"] = "Harold";
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "roar";
noises.push("purr");
noises.unshift("meow");
noises[noises.length] = "growl";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
noises.push("snarl");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Bracket notation and dot notation
 
 * 2. What are the different ways of accessing elements on arrays?
 * Bracket notation using the zero-index
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
animals.push(duck);
console.log(animals);

var horse = {
    species: 'horse',
    name: 'Rhubarb',
    noises: ['neigh', 'whicker']
};

var bird = {
    species: 'pigeon',
    name: 'Brewster',
    noises: ['coo', 'burble']
};

animals.push(horse);
animals.push(bird);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; // simple list, doesn't need categories

function getRandom(array) {
    return Math.floor(Math.random() * (array.length - 1));
}
friends.push(animals[getRandom(animals)].name);
bird.friends = friends;
console.log(bird);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
