//objects declare in two way 

// 1.Singletone :- make object use constuctor than it is called singletone.
// 2.object litterals.

// objects litterals how to create and use .
const mySym = Symbol("key1");
const jsuser = {
    name: "vikram",
    "Full name": "Vikram kumar Chaurasiya",
    [mySym]: "myKey1",//this way declaration symbol type properties.
    age : 19,
    locationc:"Bihar",
    email: "Vikram@gmail.com"
} 
/*
console.log(jsuser.name); //good way acessing element 
console.log(jsuser["age"]); 
console.log(jsuser["Full name"]);
console.log(jsuser[mySym]); //this way to access symbol type properties 
//console.log(typeof jsuser[mySym]);

const x = jsuser;
console.log(x.email);
console.log(x["Full name"]);

jsuser.email = "vikramchaurasiya.github.io"; //modifiy 
//Object.freeze(jsuser); //this function doesn't change any properties;
jsuser.email = "vikram@1234";
//console.log(jsuser);

*/
jsuser.greeting = function(){
    console.log("Hello js user");
}
jsuser.greetingTwo = function(){
    console.log(`hello js user ${this["Full name"]}`);
} 
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
