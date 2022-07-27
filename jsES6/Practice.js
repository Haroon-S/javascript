// Arrow function
// Arrow function
var magic = () => new Date();

// Arrow function with parameters
// we are passing 2 arrays in it

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));



// Arrow function High Order
// an Array
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// an arrow function
const squareList = (arr) => {
    // in this filter and map function is taking arrow function as thier parameters
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


// function default parameters
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5, 2));
console.log(increment(5)); 



// Use the Rest Operator with Function Parameters
// with the help of this we can pass any number of argument in it
const sum = (function() {
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3, 4));


  
// Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = arr1; // change this line
  arr1[0] = 'potato'
})();
console.log(arr2);





// Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54


//Getting average temperature by Using Destructuring Assignment to Assign Variables from Objects
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


// Destructuring objects
const player = {
  name: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};

// console.log( player.address.city );

const { name, club, address: { city } } = player;

// console.log(`${name} plays for ${club}`);

console.log(`${name} lives in ${city}`);



const student = {
  name: "Kyle",
  age: 24,
  projects: {
      diceGame: "Two player dice game using JavaScript"
  }
}


const {name, age, projects:{diceGame}} = student

console.log(`${name} is ${age} year old. ${name} project is : ${diceGame}`)









// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
  
    const {today : {min : minOfToday, max : maxOfToday},tomorrow : { min: minOfTomorrow, max: maxOfTomorrow }} = forecast; 
  
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); 




//   Use Destructuring Assignment to Assign Variables from Arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);


let q = 8, e = 6;
(() => {
  "use strict";
  [q, e] = [q, e]
})();
console.log(q); 
console.log(e); 






// Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [ , , ...arr] = list; 

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); 
console.log(source);




// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = (function() {
  
    return function half({ max, min }) {
      return (max + min) / 2.0;
    };
  
  })();
  console.log(stats); 
  console.log(half(stats)); 

   




//   Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male")); 





// Write Concise Declarative Functions with ES6
const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  
  bicycle.setGear(3);
  console.log(bicycle.gear);



  


//   Use class Syntax to Define a Constructor Function
  class SpaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
    }
  }
  var zeus = new SpaceShuttle('Jupiter');
  
  console.log(zeus.targetPlanet)
  
  
//  this is how you create an object its same as you do in java on netbean
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
const myCar = new Car("Ford", 2014);
  
// Use class Syntax to Define a Constructor Function
  function makeClass() {
    class Vegetable 
    {
      constructor(vegetable)
      {
        this.vegetable = vegetable;
      }
    }
  
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.vegetable); 





//   Use getters and setters to Control Access to an Object
  class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer(){
      return this._author;
    }
    // setter
    set writer(updatedAuthor){
      this._author = updatedAuthor;
    }
  }
  

//   Use getters and setters to Control Access to an Object A thermostat object
  function makeClass() {
    class Thermostat {
      constructor(temp) {
        this._temp = 5/9 * (temp - 32);
      }
      get temperature(){
        return this._temp;
      }
      set temperature(updatedTemp){
        this._temp = updatedTemp;
      }
    }
    return Thermostat;
  }
  
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); 
  let temp = thermos.temperature; 
  thermos.temperature = 26;
  temp = thermos.temperature; 
  console.log(temp)





//   Understand the Differences Between import and require
import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");

console.log(cap);





// Use * to Import Everything from a File
import * as capitalizeStrings from "capitalize_strings";







// Import a Default Export

// if the export thing is default you dont have to put curly braces around it

import subtract from "math_functions";

subtract(7,4);




// Object Literal
function addressMaker(city, state) {
  const newAdress = {city, state};
  
  console.log(newAdress);
}

addressMaker('Austin', 'Texas');







// Spread Operator
let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("John");


let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);










// includes() (Challenge)
/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

if( listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake" );
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate" );
}






// **Classes Challenge**:

// Create a class Player with the following:
// - Add a Name and Country properties
// - Add a function that when it runs should print into the console ("Messi was born in Argentina");
// - Make sure to adapt this function to receive dynamic Names and Clubs.

// Create a Subclass called TennisPlayer that extends from the class Player
// - Add a new property Age.
// - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
// - Make sure the Name and Age are dynamic.




// In this challenge i use 3 different js files 1st for Player class 2nd for Tennis player class and third file for calling everything

// this is Player file
export class Player
{
    constructor(name, country)
    {
        this._name = name;
        this._country = country;
    }
    
    get playerInfo()
    {
        return `${this._name} was born in ${this._country}`
    }
}


// this is TennisPlayer File
import {Player} from "./Player"

export class TennisPlayer extends Player
{
    constructor(name, country, age)
    {
        super(name,country);
        this._age = age;
    }
    
    get playerInfo()
    {
        return `${this._name} is ${this._age} years old and knows how to play Tennis`
    }
}


//  This is index.js file
import {Player} from "./Player"
import {TennisPlayer} from "./TennisPlayer"

let tplayer = new TennisPlayer("Novak Djokovic", "Serbia", 35)

console.log(tplayer.playerInfo)







// Promises


// Promises

const buyFlightTicket = () => {
  return new Promise( (resolve, reject) => {
      setTimeout( () => {
          const error = false;
          
          if( error ) {
              reject("Sorry your payment was not successful")
          } else {
              resolve("Thank you, your payment was successful");
          }
      }, 3000)
  })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );






/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const data = () => {
  return new Promise((resolve, reject) =>
  {
      setTimeout(() => 
      {
          const error = false
      
          if(error)
              {
                  reject("Sorry the user was not Found")
          }
          else{
                  resolve("The user is found its you Haroon its always been you")
          }  
      },5000)
  })
}

data()
.then((found) => console.log(found))
.catch((notfound) => console.log(notfound))



// Promises - Challenge 2

const userData = new Promise((resolve, reject) => {
  const error = false;
  
  if(error) {
      reject('500 Level Error');
  } else {
      resolve({
          firstName: 'Dylan',
          age: 32,
          email: 'DylansEmail310@gmail.com'
      });
  }
});

userData
  .then((data) => console.log(data))
  .catch((error) => console.log(error));








  /**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

// fetch('https://jsonplaceholder.typicode.com/comments/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
  method: "POST",
  body: JSON.stringify({
      postId: 1,
      name: 'Dylan',
      email: 'dylansemail310@gmail.com',
      body: 'That was dope!'
  })
})
.then(response => response.json())
.then(data => console.log(data))








/**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */



 fetch('https://jsonplaceholder.typicode.com/comments', {
  method : "POST",
  body : JSON.stringify({
      postId : 69,
      userId : 96,
      title : "Post comment",
      email : "haroon.gmail.com",
      body : "This is my first comment"
  }),
   headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data))




  //Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    console.log(data.value);
}

getJoke();

// This challenge is my try it may be invalid
const apiUrl = "https://api.chucknorris.io/jokes/random";

const randoJoke = async () => {
    
    let randomJoke = new Promise((resolve,reject) => {
    console.log("Hello how are you")
    setTimeout(() => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(joke => console.log(joke.value))
        resolve("Here is your joke say ha ha")
    },5000)
})
    const yourJoke = await randomJoke;
    console.log(yourJoke)
}
randoJoke()









// Set in ES6]
// it gives us the list
const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(5).add(17);

console.log(exampleSet.has(5));

exampleSet.clear();

console.log(exampleSet.size);