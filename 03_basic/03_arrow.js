
const user = {
    username: "VIKRAM",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
       // console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "Vikku";
//user.welcomeMessage();
//console.log(this);

// function chai(){
//     let username = "vikram";
//     console.log(this.username);
// }

//chai();

// const chai = function (){
//     let userName = "vikram";
//     console.log(this.userName);
// }

//it is arrow function

const chai = () => { 
    let username = "vikram"
    console.log(this.username)
}
chai();

// const addTwo = (num1,num2) => { 
//     return num1+num2
// }
// const addTwo = (num1,num2) => num1 + num2; //it methode implicit return.
//const addTwo = (num1,num2) => (num1 + num2);
const addTwo = (num1,num2) => {username : "vikram"}; //when arrow function use in object

console.log(addTwo(3,5));



