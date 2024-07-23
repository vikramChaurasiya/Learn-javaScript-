// singletone how to create and use.
//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "vikram";
tinderUser.isLoggedIn = false;

//console.log(tinderUser );

//nested objects crated 

const regularUser  = {
    email : "Vikram@1230",
    fullname:{
        userfullname: {
            fistname: "vikram",
            lastname : "chaurasiya"
        }
    }
}
//console.log(regularUser.fullname?.userfullname.fistname);

const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"a", 4: "b"};
const obj3 = {5:"a", 6: "b"};

// const obj4 = Object.assign({},obj1,obj2,obj3);
// const obj5 = Object.assign(obj1,obj2,obj3);
// console.log(obj4);
// console.log(obj5);

const obj4 = {...obj1,...obj2,...obj3}; //it merge two or more than two object
//console.log(obj4);

const users =[
    {
        id : "1",
        email : "vikram@123"
    },
    {
        id : "2",
        email : "vikram@1234"
    },
    {
        id : "3",
        email : "vikram@12345"
    },
    {
        id : "1",
        email : "vikram@123"
    } 
]
console.log(users[1]);
console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')); //it check the value it exit or not.




