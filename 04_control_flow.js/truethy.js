const userEmail = "vikram@ty8";
if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

// falsy values

//false ,0 ,-0, BigInt 0n, null, undefined ,NaN

//truthy values

// "0", 'false' , " " , [] ,{} ,function(){}

//How to check array is empty.

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  //when two value is initilize in one variable then ignore null , undefined value;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//terniary operator

//condition  ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than equal to 100"):console.log("greater than equal to 100");
