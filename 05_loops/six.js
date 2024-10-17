//For each loop contain any perameter or call back function for iteration but

//For each loop doesnt return anything like th int vaiable 


// const coding = ["ruby", "python", "java", "cpp"]

// const nrenum = coding.forEach( (item)=>{
//     console.log(item);
//     return item
// } )

// console.log(nrenum); //it iwll give undefined becuase fpr each loop not return anything no matter you did it manually by writing return




//Filter is use instead of for each loop but mostly where we have to return the for each loop values in the variable 

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newnum = myNum.filter( (itemm)=> {
    // console.log(itemm);
    return itemm
    
} )

console.log(newnum);
