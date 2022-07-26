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