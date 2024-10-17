const coding = ["ruby", "python", "java", "cpp"]

coding.push("css")
// console.log(coding);


//in the below for each loop we use the call back funcation becuasue the call back function dont has any name
coding.forEach( function(languages){ //This is use to access the whole array no mattter what the size of the array is 
    // console.log(languages);
} )


coding.forEach( (lang) => {
    // console.log(lang);
    
} )


function printme (item){
    console.log(item);
}

// coding.forEach(printme)


const mycoding = [
    {
        langname: "Java",
        langtitle: "Js",
    },  {
        langname: "c++",
        langtitle: "c++",
    },  {
        langname: "python",
        langtitle: "py",
    },
]


mycoding.forEach( (lang2)=>{        //This is how we use For Each loop to get the data from the bjects of array 
    console.log(lang2.langname);
    
} )
