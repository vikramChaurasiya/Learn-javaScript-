const PromiseOne = new Promise((resolve,reject)=>{
    //do an ansyc task.
    //Db call, cryptography ,network
    setTimeout(()=>{
        console.log("Ansyc task is complete");
        resolve();
    },1000)
})

PromiseOne.then(()=>{
    console.log("promised consumed");
})

// *****************************OR******************************************

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Ansyc task two is complete");
        resolve();
    },1000);
}).then(function(){
    console.log("ansyc 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username: "chai",email: "chai@example.com"
        },1000)
    })
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "vikraam", pass:"1234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user)
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolvef or reject"))

const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javaScript", password:"1234"})
        } else{
            reject('ERROR: js went wrong')
        }
   },1000)
})

async function consumePromideFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromideFive()

/*

async function getAlluser(){
    try {
        const response = await fetch('https://api.github.com/users/vikramChaurasiya');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}

getAlluser();

*/
/********************************************OR****************************************/

fetch('https://api.github.com/users/vikramChaurasiya')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})