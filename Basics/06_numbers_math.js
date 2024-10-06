//sometimes we have to specify the data types for getting the specific vlaue in output 
// like the follwoing 

let value = new Number(10);
// console.log(value);
// console.log(value.toString());

// console.log(typeof value);


//Math is a pre defined library in the javascript 


// console.log(Math.abs(-4));  //For absolute value

// console.log(Math.round(4.6));  //For round of 

// console.log(Math.floor(4.7)); //For round of to the lowest value like if it is 4.9 it will still print 4

// console.log(Math.ceil(4.6)); // for round of to the biggest value

// console.log(Math.min(9,10,11,3)); //for print the minimum value 

// console.log(Math.max(11, 12, 122, 12222)); // for print the maximum value 


 
// console.log(Math.random());   //For Random Value

// console.log(Math.floor(Math.random()*10)+1);  //For the Random and the value in integer

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);


