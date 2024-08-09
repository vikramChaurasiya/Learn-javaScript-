
// setTimeout it is use some second stop than print only one time 

/*

setTimeout(function(){
    console.log("hello");
},2000);

const changeText = function(){
    document.querySelector('h1').innerHTML= "best js series";
    
}
const setT=setTimeout(changeText,2000);
const stop=document.querySelector('#stop');


stop.addEventListener("click", function(){
    clearTimeout(setT); //when stope the setTimeout then use.
    console.log("STOPPED");
    
})

*/

//setInterval it use when a particular time frame print.
//clearInterval it use for stop of setInterval.

function sayhell0(){
    console.log("Hello, i am use setInterval");
}

const interval = setInterval(sayhell0,2000);

document.querySelector('#start').addEventListener("click",function(){
     setInterval(sayhell0,2000);
})


document.querySelector('#stop').addEventListener("click",function(){
    clearInterval(interval);
    console.log("stopped");

})
