// Dates in JS

let myDate = new Date()   //Date is an object in JS

//these are the funcation of printing the date in different form 

// console.log(myDate);

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());


let newDate = new Date(2024, 8, 20, 10, 15)

// console.log(newDate.toLocaleString());


let myCreatedDate = new Date ("2024, 09, 20")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = new Date()

// console.log(myTimeStamp.toLocaleString());

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let myNewDate = new Date()

console.log(myNewDate.getMonth()+1); 

console.log(myNewDate.getDay()+1);

console.log(myNewDate.getTime());


myNewDate.toLocaleString('default', {
    weekday : "long"
})

console.log(myNewDate.weekday());






