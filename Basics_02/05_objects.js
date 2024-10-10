const course = {
    name : "Muhammad",
    price: "999",
    coureinstructor: "Hitesh"
}

const {coureinstructor : instructor }=course;  //This is how we can destrcuture the object

const {name : n }= course;
console.log(n);

console.log(instructor);
