const marvel_hero = ["hitesh", "thor", "ironman", "spiderman"]
const dc_heros = ["karish", "me", "you", "us"]

console.log(marvel_hero);

const newArr = marvel_hero.concat(dc_heros) //for joining two arrays

const newArr2 = [...marvel_hero, ...dc_heros] //this is us to  join two or more arrays usualy used by everyone

console.log(newArr2);


//Nested Arrays

//Flat is use to make a single array by using the nested array

const newArr3 = [1,2,3,4, [5,6,7,8,], [9,10,11,[12,13,14]]]

const anotherArr = newArr3.flat(Infinity)

// console.log(anotherArr);

console.log(Array.isArray("Muhammad"));

console.log(Array.from("Muhammad")); //make a array and print it in indvidually letter 

console.log(Array.from({name: "Muhammad"})); //this will given the empety array


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3));





