h1 = document.querySelector("h1");

/*

function changeColor(color ,delay ,nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
}

//it is known as callback,nesting callBacks  => callback hell;

changeColor("red" , 1000 , ()=>{
    changeColor("orange" , 1000 , ()=>{
        changeColor("green" , 1000 , ()=>{
            changeColor("yellow" , 1000 , ()=>{
                changeColor("blue" , 1000);
            });
        });
    });
});

*/

//***********************************OR************************************** */

/*

//use promise and then ,catch;
//promise use when like callback hell situation

function changeColor (color,delay){
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay)
    });
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("yellow",1000);
})    
.then(()=>{
    console.log("yellow color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("yellow color was completed");
    return changeColor("pink",1000);
})    
.then(()=>{
    console.log("pink color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    
})   

*/
//******************************OR******************************************* */

// async , await use this 
//await use for wait the run current function then run other function.

function changeColor (color,delay){
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay)
    });
}

async function demo(){
    await changeColor("red",1000);
    await changeColor("black",1000);
    await changeColor("white",1000);
    await changeColor("yellow",1000);
    await changeColor("blue",1000);
    await changeColor("pink",1000);
    await changeColor("green",1000);
    await changeColor("orange",1000);
}

demo();