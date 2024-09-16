// object literal :- it is a collection of properties and methode.
const user = {
    userName: "Vikram",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`UserName:${this.userName}`);
        // console.log(this);
        
        
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

//new keyword:- create a empty object/instance.
//                when new keyword create then Constructor function call

function User (userName, loginCount, singedIn){
    this.userName =  userName;
    this.loginCount = loginCount;
    this.singedIn = singedIn;

    this.greeting = function(){
        console.log(`welcome ${this.userName}`);
        
    }


    return this //when this  not return then  default return 
}

const userOne = User("vikram", 12,true);
// const userTwo = User("vikram", 12,true);
// const userOne =new User("vikram", 12,true);  // new keyword create new instance for new variable
// const userTwo =new User("vikram", 12,true);

// console.log(userOne.constructor); 
console.log(userOne.constructor);

