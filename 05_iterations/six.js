/*

const coding =["js","ruby","java","python","cpp"];

//forEach loop is not return value.

coding.forEach( (item)=>{
    console.log(item);
} );

*/

//filter use when check condition in loop.

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) =>num<4) //single line or basic.
// console.log(newNums);

//*************************OR**********************

const newNums= myNums.filter(  (num) =>{
    return num >4;
} )

console.log(newNums);


<<<<<<< HEAD
=======

const newNums = [];

myNums.forEach( (num) =>{
    if(num<4){
        newNums.push(num)
    }
} )

console.log(newNums);

*/
>>>>>>> c0be642353413ceaf71fc7bcb0e7854da931495a

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) =>bk.genre=="History" )
  //console.log(userBooks);
 userBooks = books.filter(  (bk)=> {
    return bk.edition >= '2005'
 } )

 //console.log(userBooks)

 userBooks = books.filter( (bb)=>{
    return bb.publish ==2011
 });
 
 //console.log(userBooks);