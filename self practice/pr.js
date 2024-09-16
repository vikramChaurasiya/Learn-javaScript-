// in object add new property using .prototype 

function Student(a, b) {
    this.name = a;
    this.id = b;
}
 
Student.prototype.age = 12;
 
const s1 = new Student("Dinesh", 1234567);
 
console.log(s1.name +   " is " + s1.age + " years old.");


// This example adds a new method to the object.

function Student1(a, b) {
	this.name = a;
	this.id = b;
}

Student1.prototype.details = function () {
	return this.name + " " + this.id
};

// details is a methode na,e for create a user

let s2 = new Student1("Dinesh", 1234567);

console.log(s2.details());

// 1st .setPrototypeOf()

/*the Object.setPrototypeOf() method in JavaScript is a standard built-in object thatthat will sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

Syntax:
Object.setPrototypeOf(obj, prototype)
*/
let geek1 = {
    prop1() {
        return 'Object.isExtensible()';
    },
    prop2() {
        return 'JavaScript ';
    }
}
let geek2 = {
    prop3() {
        return 'Geeksforgeeks';
    }
}

Object.setPrototypeOf(geek2, geek1);

console.dir(geek2);
console.log(geek2.prop3());
console.log(geek2.prop2());
console.log(geek2.prop1()); 


// 2nd Array to Array.prototype.toLocaleString()

// User inputs.
let name = ["sahil", "zain", "deepanshu"];
let number1 = 3.45;
let number2 = [23, 34, 54];

let arr = [name, number1, number2];

// Applying array.toLocaleString function
let string = arr.toLocaleString();

// Printing string.
console.log(string);

// Date to Date.prototype.toLocaleString()

let d = new Date(Date.UTC(2020, 9, 26, 7, 0, 0));
let result = d.toLocaleString();
console.log("Date and Time of apocalypse: " + result);
