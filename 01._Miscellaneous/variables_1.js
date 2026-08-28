// node REPL (Read-evaluate-print loop)

//Type Coercion


// Rule: Use strict equality cecks: === or !==

//node <filename>



//console.log("Adam")

// Rule: Use const whenever possible, otherwise use let

const myFavoriteNumber = 213;

// const means that it is constant in the assignment 

const person = {
    // key-value pair
    name: 'Amin'
};

person.age = 123;

// delete person.name
console.log(person);

const things = ["mouse"];

things.push("car");

// things.pop();


// Use comma in console.log because if we use + (concatenate)
// we might coerce and change the values
console.log(things[0], things[1]);




// Data types in JavaScript
// Strings, boolean, Number, BigInt, Null, Undefinded, Object, Symbol

const greetingOne = 'Hej med jer';

const greetingTwo = 'Hej med dig, "ven"'

// template literals
// beneft: multi-line
const greetingThree = `Hej med "dig", 

'${person.name}'`;


console.log(greetingOne, greetingTwo, greetingThree)
