//There are 2 types of datatypes in the js 


//*************Premitive Datatypes************** */
//String 
// Boolean
// Number
// Symbol
// BigInt
// null
// undefined

//***************Non Premitive (Refrenced base types)********************* */

// Arrays
// Object
// Funcations

let heros =["Ahad", "Ahmad", "Muhammad"]
console.table(heros);

let myobj = {
    fullName : "Muhammad Umar",
    myAge : 19,
    degree : "Bs Software egineering",
}


// console.log(typeof myobj);


// Every Datatype has some types 

//Two types of Memory 


// Stack Heap



//Stack(Premitive Datatypes are use stack)

//When we update a veriale it will just update the value of the 2nd variable not the 
//first variable. Because it works on stack



let myName = "Muhammad Umar"

let myEmail = "umar@google.com"


let anotherName = myName

anotherName = "Aqsa Rana" 

// console.log(myName);
// console.log(anotherName);


//But when we use Heap it will create a Refrence to the main value like doesnt give th
// copy of the variable it give the refrence of the new variable


let obj2 = {
    newname : "Muhammad",
    mynewmail : "umar@gmail.com",
    
}

let user2= obj2

user2.newname = "bsdk"

// console.log(obj2.newname);


let details = String ("Muhammad Umar")
// console.log(details.toUpperCase());


// console.log(details.charAt(6));

// console.log(details.indexOf("M"));


//node Basics/05_datatypesummary.js
    

//****************Strings***************** */

let yourname = "            Muhammad"

console.log(yourname.slice(3)); // Make a slice of String

console.log(yourname.trim()); //Remove White Spaces

console.log(yourname.includes("z")); //to check it includes or not 






