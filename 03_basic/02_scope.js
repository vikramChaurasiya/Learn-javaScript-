// let a =10;
// const b =20;
// var c = 30;

if(true){
    let a =10;//it variable is not access in outside of the  block scope variable.  
    const b =20;//it variable is not access in outside of the block scope variable.  
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function addone(num){
    return num + 1
}

console.log(addone(4))

const addTwo = function(num){ //this is hoistng function
    return num + 2;
}

