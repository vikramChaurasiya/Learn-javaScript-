const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["Superman" , "flash","batman"];

// marvel_heros.push(dc_heros); //this is not good experience for adding two array.
//const allHeros = marvel_heros.concat(dc_heros);
// console.log(marvel_heros);

const allHeros = [...marvel_heros, ...dc_heros]; //this is speraid operator using add different two array.
console.log(allHeros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_arr = another_arr.flat(Infinity); //this function return flate array.
console.log(real_another_arr)


console.log(Array.isArray("Vikram"));
console.log(Array.from("Vikram")); //this function create any value in array .
console.log(Array.from({name : "Vikram"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));