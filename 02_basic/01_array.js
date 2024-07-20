// array
const myArr = ["hello" , "vikram" ,76,54,98.99]; //in array all type of datatype initilize.
console.log(myArr[4]);

//Array Methods 

/*

myArr.push(5);
myArr.push(7); //add element at last position .
myArr.pop(); // remove from last position .
myArr.unshift(9); //add element at first position.
myArr.shift(); // remove from fist position.
console.log(myArr);

*/

// console.log(myArr.includes(9)); // this function search element .
// console.log(myArr.indexOf(76)); //this function search index number of element.

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

//slice ,splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); //this function not break original array.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //this function break in two array original array
console.log("C ", myArr);
console.log(myn2);

