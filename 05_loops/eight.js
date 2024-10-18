// Reduce is use to sum all the recent things and update them and add the next one ass well 
//Reduce is mostly use in card 
//whenever you add a new thing it will add the thing and update the card

const arr = [1,2,3]

const newarr = arr.reduce(function (acc, currval) {
    console.log(`The acc value is ${acc} and the currval is: ${currval}`);
    return  acc+currval
}, 0 )



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);



