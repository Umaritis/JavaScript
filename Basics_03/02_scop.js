function scop (){
    let a =10;
    const b = 20;
    var c = 30;
}

// console.log(c);


console.log(addone(10));

function addone (num){
    return num+1
}



console.log(12);

//BY this way funcation will not executed because of the scop. Just beacuse the whole function is stored in the variable



const addtwo = function(num){
    return num +2
}

