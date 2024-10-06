//Objects

//Singleton ===>> this is also the object created by the constructor 

//Object Literals

// there are two ways to access the object keys 
// one is JSuser.usermail like this
//other is JSuser["useremail"]
//symbols are just used the second way 
// create and accessing symbol is quite techical thing

const mysymb= Symbol("mykey1")
const JSuser = {

    name: "Muhammad",
    usermail:"muhmmad@google.com",
    age: 19,
    location: "Lahore",
    IsLoggedIn: false,
    [mysymb]: "Mykey333",

}

console.log(JSuser);
console.log(JSuser.IsLoggedIn);

// Object.freeze(JSuser) // To freeze the Object updates 

JSuser.usermail="Muhammadumar@chatgpt.com"

console.log(JSuser["usermail"]);

console.log(JSuser["name"]);

JSuser.greeting = function(){
    console.log("Hello JS User");
    
}

JSuser.greetingtwo = function(){
    console.log(`Hello to the first time visitor, ${this.name} to our JS Profile`);
    
}

console.log(JSuser.greeting());
console.log(JSuser.greetingtwo());



