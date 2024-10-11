const user = {
    username: "Muhammad Umar",
    price : 999, 
    welcomemessage : function(){
        console.log(`${this.username}, welcome to the Website`); //Whenever we refer to the current context we have to use (this) keyword

    }
}


// user.welcomemessage(user.username = "Muhammad")

// console.log(this);  //This will give empty value here but on google it will give some

function chai (){
    const usern = "Muhammad"
    console.log(this.usern); // this will give the undefiend value just because its not work same in funcation
    
}

// chai()

// const obj = {
//     name: "Hitesh",
//     output :  function(){
//         console.log(this.name)
//     }
// }

// obj.output();


const chaiorcode = () =>{
    let username = "Muhammad "
    // console.log(this.username)
}

// chaiorcode()  //It will still give the same result undefined




//******************************Arrow Funcation   Explicit Function*********************************** */



const twonum = (num1, num2 )=> {
    return num1 + num2
}
console.log(twonum(2, 2));



//Another Arrow Funcation which is also called implicit funcation where we return value without using return keyword


// const threenum = (num1, num2, num3) => num1 + num2 + num3  //Implicit Function 

// console.log(threenum(3,3,3));



//***********************************Another way to define Function************************************ */


const threenum = (num1, num2, num3) => (num1 + num2 + num3)

// console.log(threenum(2,2,2));



