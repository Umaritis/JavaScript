const userEmail = []

if (userEmail) {
    // console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1 = 5 ?? 10

let val2 = null ?? 20


console.log(val2);

// *************Terniary opreator*************

// const value ? true : false 

const icePrice = 100
icePrice <=80 ? console.log("Value is less than 80 ") : console.log("Value is greater than 80 ")

