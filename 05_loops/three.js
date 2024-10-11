//For of loop


const arr = [1,2,3,4,5]
for (const arree of arr) {
    // console.log(arree);   
}

// const newArr = ["Superman", "spiderman", "batman"]

// for (const man of newArr){
//     // console.log(man);
// }

// const username = "Muhammad"
// for(const name of username){
//     // console.log(name)
// }


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, vlue] of map) {
    console.log(key, ": " , vlue);
}

