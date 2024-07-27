/*

******************************************************

if control flow syntax.
if any variable check the value and dataType then use === condition.

if (condition) {
    
}

***************************************************************

if else cotrol flow syntax.

if (condition) {
    
} else {
    
}


***************************************************

nested if else syntax.

if (condition) {
    
} 
else if() {
    
}
else if(){

}
else{

}





*/

const userLoggedIn = true;
const debtCard = false;

// when two condition check and both condition is true then use &&(AND)

// when two condition check and one condition is true and second condition false  then use ||(OR)

if(userLoggedIn || debtCard){
    console.log("Allow to buy course");
} else {
    console.log("not for allow to busy")
}


