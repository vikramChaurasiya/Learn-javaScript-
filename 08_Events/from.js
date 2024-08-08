// let form = document.querySelector("form");
// form.addEventListener("submit", function(e){
//    e.preventDefault();

//    let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp);
//    console.log(inp.value);
   
// })


//*****************************how to from data collect***********************

/*

let form = document.querySelector("form");
form.addEventListener("submit", function(e){
   e.preventDefault();

   let user = document.querySelector("#user");
   let pas = document.querySelector("#pass")

   console.log(user.value);
   console.dir(pas.value);
   
   alert(`Hi ${user.value}, your password is set to ${pas.value}`)

});

*/

// ################################___OR___########################################

let form = document.querySelector("form");
form.addEventListener("submit", function(e){
   e.preventDefault();

   let user = this.elements[0]; 
   let pas = this.elements[1];
   console.log(user.value);
   console.dir(pas.value);
   
   alert(`Hi ${user.value}, your password is set to ${pas.value}`)

});