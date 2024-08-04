/*
let h2 = document.querySelector("h2");
console.dir(h2);
h2.innerText = h2.innerText +" from Apna college";


let divs = document.querySelectorAll(".box");
divs[0].innerText = "New unique value 1";
divs[1].innerText = "New unique value 2";
divs[2].innerText = "New unique value 3";

for(div of divs){
    console.log(div)
}

let index = 1; 
for(div of divs){
    div.innerText = `New unique value ${index} `
    index++;
}

*/

//*****************************DAY 2************************** */
 
/*
when check any attribute value.

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("name");
console.log(id);

let pa = document.querySelector("p");
console.log(pa.getAttribute("id"));



// when set any attribute value.

let pa = document.querySelector("p");
console.log(pa.setAttribute("class", "hello"));



// change any css style through js.

let div = document.querySelector("div");
div.style.background = "red";

div.style.visibility = "hidden"
div.style.fontSize = "30px";
div.innerHTML = "Hello !";



// how to create attribute through js .

let newBt = document.createElement("button");
newBt.innerText = "click me!";
console.log(newBt);
let  p = document.querySelector("p");
div.append(newBt); when set last
div.prepend(newBt); when set first
div.before(newBt); when set before current div
div.after(newBt); when set after current div
p.after(newBt); 


//how to add any heading or tag without using html then

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, i am create a new Heading! <i/>";
document.querySelector("body").prepend(newHeading);


//when any tag remove usin js then
let pa = document.querySelector("p"); fist a fall access then remove
pa.remove();

*/