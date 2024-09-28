// object literal :- it is a collection of properties and methode.
const user = {
    userName: "Vikram",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`UserName:${this.userName}`);
        // console.log(this);   // if console.log(this) then it display all parent data.
        
        
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this); //if run in  golab constent then diplay empty. 

//new keyword:- create a empty object/instance.new keyword it is Constructor function.
//           when new keyword create then Constructor function call

// Constructor function work one object liters use multiple object instance create.

function User (userName, loginCount, singedIn){
    this.userName =  userName;
    this.loginCount = loginCount;
    this.singedIn = singedIn;

    this.greeting = function(){
        console.log(`welcome ${this.userName}`);
        
    }


    return this //when this  not return then  default return 
}

// const userOne = User("vikram", 12,true);
// const userTwo = User("vikram", 12,true);
const userOne = new User("vikram", 12,true);  // new keyword create new instance for new variable
// const userTwo =new User("vikram", 12,true);

console.log(userOne); 
// console.log(userOne.constructor);

