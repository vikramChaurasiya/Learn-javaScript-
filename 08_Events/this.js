let h1 = document.querySelector("h1")
let h3 = document.querySelector("h3")
let p = document.querySelector("p")
let btn = document.querySelector("button")

function colorchange(){
    console.dir(this.innerText);
    this.style.backgroundColor = "red";
}

h1.addEventListener("click" , colorchange );
h3.addEventListener("click" , colorchange );
p.addEventListener("click" , colorchange );
btn.addEventListener("click" , colorchange );

