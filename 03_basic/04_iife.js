// //immediately invoked Function Expressions(IIFE)


// /*
// //it is normal function
// function chai(){
//     console.log(`DB Connected `); 
// }

// */

// //it IIFE;


// // (function chai(){
// //     console.log(`DB Connected `);
// //     console.log("DB")
// // })()

// ( () => {
//     console.log("DB CONNECTED");
// })()


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


