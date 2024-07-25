function sayMyName() { //function definition 
    console.log("V");
    console.log("I");
    console.log("K");
    console.log("R");
    console.log("A");
    console.log("M");
}
// sayMyName(); //function call 

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
    // let result = number1 + number2;
    // return result;

    result = number1+number2;

}

//const result = addTwoNumber(5,3);
//console.log("Result: ",result);
// addTwoNumber(3,4);


function loginUserMessage(usernName){
    if(usernName === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${usernName} just logged in`;
}

//console.log(loginUserMessage("Vikram"));
// console.log(loginUserMessage()); //when no any passing throw the arrangements then print undefine


//part -2
function calculateCartPrice(num1){
    return num1; //it function has only one parameter pass so it is return only one argument.
} 
console.log(calculateCartPrice(20));

function calculateCartPrices(...num1){
    return num1; //using rest operators multiple argument pass  form one parameter.
}

console.log(calculateCartPrices(200,300,4000));

const user = {
    userName: "vikram",
    price: 199
}
//how to use object in function.
function handleObjects(anyobjects){ 
    console.log(`UserName is ${anyobjects.userName} and price is ${anyobjects.price}`);
}
//handleObjects(user);

handleObjects({  //it is also use object in function.
    userName :"sam",
    price: 399
});

//how to use Array in function.
const myNewArray = [200,300,4000];

function returnSecondValue(getArray){
    return getArray[2];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,4000]));

