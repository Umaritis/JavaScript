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

// console.log(newnum);

const newone = myNum.filter( (num)=> num>4 )  //this is how we use condtion in filter 
console.log(newone);


const newtwo = myNum.filter( (numbbb)=> { 
    return numbbb >4  //whenever we do defination in curly bracies we have to return it 
    //for returning we use return keyword 
} )

console.log(newtwo);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
