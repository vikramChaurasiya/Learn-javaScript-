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


//****************************************************************************************************

const sentence = "hello i am vikram !";
const index = 3;
console.log(`character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index,)}`); //this function use when check ascii value of any particular letter use charCodeAt.

let indeX = -4;
console.log(`An index of ${indeX} return the character ${sentence.at(indeX)}`); //this function use check negative side index

const str1 = "Hello";
const str2 = "world";
console.log(str1.concat(" " ,str2)); //this function is use add two string .

console.log(sentence.replaceAll('vikram',' vikku')); //this function change the sentence.
 


