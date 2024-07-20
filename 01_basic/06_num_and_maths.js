/*

const score = 100;

console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(5));  //this function is use how many decimal number show user.

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); //calculate precision value.

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // it function use separate comma in American standard for ex:- 1,000,000  .

//when use indian standard then use (`en-IN`) ;

console.log(hundreds.toLocaleString(`en-IN`));



*/

/***************************maths*************************************** */

/*

console.log(Math.PI); //CHECK PI VALUE.

console.log(Math);
console.log(Math.abs(-4)); //ihis function calculate Absolut number.

console.log(Math.round(4.499)); // this function claculate round of number for ex- if num = 4.499 then num = 4, again num = 4.56 then num = 4.5

console.log (Math.ceil(4.2)); //this function calculate round of number top value for ex- num = 4.2 then num = 5;
console.log(Math.floor(4.9));  //this function calculate round of number top value for ex- num = 4.9 then num = 4;

console.log(Math.min(3,2,8,6,4));
console.log(Math.max(3,7,6,9,3,1));

*/

console.log(Math.random()); // this function use any randome number show between 0 to 1.
console.log(Math.ceil(Math.random() *10)+1); 
console.log(Math.floor((Math.random()*10)+1));

const min =10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min + 1) + min)); //this is calculate random number between min value - max value.



