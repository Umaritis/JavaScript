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

console.log(userLoggedIn("Umar"))