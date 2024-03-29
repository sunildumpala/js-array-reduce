/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    let accumulatorArr = [];
    return arr.reduce(function(accumulator,currentValue){
        
         accumulator.push(currentValue[key]);
         
         return accumulator;

    }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    let strArray = str.toLowerCase().split("");
    return strArray.reduce(function(accumulator, currentValue){
        
        if (currentValue === "a"){
            if (accumulator['a'] === undefined){
                accumulator['a'] = 1;
            }else{
                accumulator['a'] += 1;
            }
        }
        if (currentValue === "e"){
            if (accumulator['e'] === undefined){
                accumulator['e'] = 1;
            }else{
                accumulator['e'] += 1;
            }
        }
        if (currentValue === "i"){
            if (accumulator['i'] === undefined){
                accumulator['i'] = 1;
            }else{
                accumulator['i'] += 1;
            }
        }
        if (currentValue === "o"){
            if (accumulator['o'] === undefined){
                accumulator['o'] = 1;
            }else{
                accumulator['o'] += 1;
            }
        }
        if (currentValue === "u"){
            if (accumulator['u'] === undefined){
                accumulator['u'] = 1;
            }else{
                accumulator['u'] += 1;
            }
        }
        return accumulator;

    }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accumulator, currentValue){
        currentValue[key] = value;
        accumulator.push(currentValue);

        return accumulator;
    }, []);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    let trueSubArray = [];
    let falseSubArray = [];
    trueSubArray = arr.reduce(function(accumulator, currentValue){
        if(callback(currentValue)){
            accumulator.push(currentValue);
        }
        return accumulator;
    },[]);
    falseSubArray = arr.reduce(function(accumulator, currentValue){
        if(!callback(currentValue)){
            accumulator.push(currentValue);
        }
        return accumulator;
    },[]);

    return [trueSubArray, falseSubArray];
}

/*************************************
Adding this part of the code for the Arow functions exercise.
************************************/
/**
 * function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
 */
/*
function double(arr) {
    return arr.map(val => {
      return val * 2;
    });
  }
*/

let double =arr => arr.map(val => val *2);

/**
 * Refactor the following:
 *  function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
 */


function squareAndFindEvens(numbers){
    let squares = numbers.map(num => num ** 2 );
    let evens = squares.filter(square=> square % 2 === 0 );
    return evens;
  }

  /**
   * Rest Spread exercises below
   */

  
  function filterOutOdds(...args){
    let nums = args.filter(num => num%2 === 0);
    return nums
  }
  
  function findMin(...args){
    return args.reduce((accumulator, currentValue) => {
        if (accumulator > currentValue){
            accumulator = currentValue;
        }
        return accumulator;
    });
  }

  const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
  


  function doubleAndReturnArgs(arr, ...args){
    let doubleArray = args.reduce(function(accumulator,currentValue){
        accumulator.push(currentValue * 2);
        return accumulator;
    }, []);
    return [...arr, ...doubleArray];
  }

  const extend = (arr1, arr2) => ([...arr1, ...arr2]);

  const addKeyVal = (obj, key, value) => {
    let newObj = {...obj};   
    newObj[key] = value;
    return newObj;
  };

  const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
  };

  const combine = (obj1, obj2) => ({...obj1, ...obj2});

  const update = (obj, key, val) => {
    obj[key] = val;
    return obj;
};



const createInstructor = (firstName, lastName) => {
    return { firstName, lastName};
  };
  
const createAnimal = (species, verb, noise) => {
    
    return {
        species: species,
        noise: noise,
        [verb](){
            return this.noise;
        }
    };
};

/**
* Destructuring exercises below
*/

const raceResults = (arr) => {
    const [first, second, third, ...rest] = arr;
    return {first, second, third, ...rest};
};

/**
* Maps and Sets exercise below
*/

const hasDuplicate = (arr) => {
    if ((new Set(arr)).size !== arr.length){
        return true;
    }else{
        return false;
    } 
};

function vowelCountv2(str){
    let resultMap = new Map();
    for(let element of str.split("")){
        console.log(element);
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u" ){
            if (resultMap.get(element) === undefined){
                resultMap.set(element, 1);
            }else{                
                let count = resultMap.get(element);
                count +=  1;                
                resultMap.set(element, count);                
            }
        }
    }
    return resultMap;
}

/**
* Car OO Challenge
*/

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    toString(){        
        return `The vehicle is a  ${this.make} ${this.model} from ${this.year}`;
    }
    honk(){
        return "Beep";
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numbWheels = 4;
    }

}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numbWheels = 2;
    }
    revEngine(){
        return "Vroom";
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
    }
    vehicles = [];
    add(newVehicle){
        if (newVehicle instanceof Vehicle){
            if(this.vehicles.length < this.capacity){
                this.vehicles.push(newVehicle);
                return "Vehicle added!"
            }
            else{
                return "Sorry, we're full";
            }
        } else{
            return "Only vehicles are allowed in here!";
        }
    }

}