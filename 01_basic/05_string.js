const name = "vikram";
const repoCount = 50;
//console.log(name +repoCount +"Hello");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// String initilization

const sname = new String('Vikram');

//when print only one letter then console.log(sname[1]) it start with 0 index. 
console.log(sname[1]);

console.log(sname.__proto__); //this is find oblect

console.log(sname.length); //check length

console.log(sname.toUpperCase()); // convert Capital letter

console.log(sname.charAt(3)) ; //check which index which letter

console.log(sname.indexOf('k')); // check which index  position it letter.

const newString = sname.substring(0,3); // check subString
console.log(newString);

const anotherString = sname.slice(-5,3); //this slice methode you check negative value same as substring.
console.log(anotherString);

const newStringone ="    vikram    ";
console.log(newStringone);
console.log(newStringone.trim()); // it is check space and remove space.

const  url = "https://vikram.com//vikram%20chaurasiya"
console.log(url.replace('%20' , '_'));  //this function used to replace the letter or each other.

console.log (url.includes("vikram")); // check the word.





