//ES6

class user {
    constructor(username, email, password){
        this.username = username;
        this.email= email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}@abc`;
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}



const chai = new user("chai" ,"Chai@134","sdsd")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());
