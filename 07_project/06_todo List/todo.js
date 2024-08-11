let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul= document.querySelector("ul")

btn.addEventListener("click", function(){
    // console.log(inp.value);

    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName== "BUTTON"){
        let listItem= event.target.parentElement;
        listItem.remove();
    } 
});


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         console.log("Element delete");
//         let par = this.parentElement;
//         par.remove();
//     })
// }


