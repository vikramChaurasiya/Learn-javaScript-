// let h2 = document.querySelector("h2");
// console.dir(h2);
// h2.innerText = h2.innerText +" from Apna college";


let divs = document.querySelectorAll(".box");
// divs[0].innerText = "New unique value 1";
// divs[1].innerText = "New unique value 2";
// divs[2].innerText = "New unique value 3";
let index = 1; 
for(div of divs){
    div.innerText = `New unique value ${index} `
    index++;
}



