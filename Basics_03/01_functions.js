function addTwoNumber(number1, number2) {
    // return number1+number2
}

const result =addTwoNumber(3,5);
// console.log(result);

//This is the basic way to to create and use the function 


function userLoggedIn (username){
    if(!username){
        console.log("Please Logged In");
        return
    }
    return `${username} just Logged IN`
}

// console.log(userLoggedIn("Umar"))


function caluculateNumber(val1, val2, ...num1){
    return num1
}

// console.log(caluculateNumber(100,200,300,400))

const userdetails = {
    name : "Muhammad Umar",
    price: "999",
}

function objecthandler (anyobject){
    console.log(`Username is ${anyobject.name} and Price is ${anyobject.price}`);   
}

// objecthandler(userdetails);

// objecthandler({   //this is the way to pass the object directly 
//     name:"Muhammad Umar",
//     price:"99"
// })


const myArray = [100,200,300,400]
function secondValue (getarray) {
    return getarray[1]
}

// console.log (secondValue(myArray))
// console.log (secondValue([100,300,4000]))

