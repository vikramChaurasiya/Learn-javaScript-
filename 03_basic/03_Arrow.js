const user = {
    username: "VIKRAM",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "Vikku";
//user.welcomeMessage();
//console.log(this);

function chai(){
    let username 
    console.log(this);
}

chai();