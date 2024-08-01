//reduce 

const myNums = [1,2,3]
// const mytotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval
// },0);

/****************************OR*************************/

const mytotal = myNums.reduce( (acc,currval)=> acc+currval,0);

//console.log(mytotal);

const shoppingCart =[
    {
        itemName: "js course",
        Price: 2999
    },
    {
        itemName: "py course",
        Price: 999
    },
    {
        itemName: "dbms course",
        Price: 4999
    },
    {
        itemName: "mobile dev course",
        Price: 5999
    }
]

const totalPrice =  shoppingCart.reduce( (acc, item)=> acc +item.Price,0 );

console.log(totalPrice);