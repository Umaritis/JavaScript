// singleton objects

const tinderuser = {}

tinderuser.name ="Muhammad Umar"
tinderuser.email = "muhammad@google.com"
tinderuser.isLoggedIn= false


const regularUaser = {
    fullName: {
        firstname: "Muhmmad",
        lastname : "Umar"

    }
}

console.log(regularUaser.fullName.firstname, regularUaser.fullName.lastname);

const obj1 = {
    1:"a",
    2: "b",
    3:"c"

}

const obj2 = {
    1:"a",
    2: "b",
    3:"c"

}

const obj3 = {
    1:"a",
    2: "b",
    3:"c"
}


// const obj4 = Object.assign({}, obj1, obj2,obj3); //this is use to copy all the ibject in one single object

const obj4 = {...obj1, ...obj2, ...obj3} // it is also use for the same purpose

// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('IsLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


