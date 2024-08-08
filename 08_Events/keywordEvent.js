let inp = document.querySelector("input");
//let btn = document.querySelector("button");

// inp.addEventListener("keyup", function(){
//     console.log("key was released");
    
// });

//inp.addEventListener("keydown", function(){
    //     console.log("key was pressed");
        
// });

inp.addEventListener("keydown", function(event){
    console.log("key =", event.key);
    console.log("code =", event.keyCode);
    
});