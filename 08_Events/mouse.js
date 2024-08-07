
//*************************if one button use***************************** 

// let btn  = document.querySelector("button");
// console.log(btn);


// btn.onclick = function () {
//     alert("button was clicked");
    
// }

// function sayHello() {
//     alert("Hello!");
// }

// btn.onclick = sayHello;


//*****************when more than one button  ******************** */

let btns  = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello
}

function sayHello() {
    alert('Hello!')
}

/********************************onmouseenter*************************** */
// onmouseenter it work when button is create and cursor at button rhen automatic click.

for(btn of btns){
    btn.onmouseenter = function (){
        alert("you enetered a button");
    }
}