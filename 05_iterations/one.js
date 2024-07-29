//for

/*

for(let i = 0; i<=10; i++){
    
    console.log(i);
}

for(let i = 1; i<5; i++){
    console.log("outer loop");
    for(let j = 1; j<5; j++){
        console.log("innner loop");
    }
}

//how to access array elements

const myarray = [1,2,3,4, "hello","hi",3.14];
for(let i =0; i<myarray.length;i++){
    console.log(myarray[i]);
}



//break and continue 

for (let i = 1; i < 20; i++) {
    if(i ==5){
        
        console.log(`Detected 5`);
        break; //it use when break the condition than it is use 
    }
    console.log(`value of  i is ${i}`);
    
}

*/
for (let i = 1; i < 20; i++) {
    if(i ==5){
        
        console.log(`Detected 5`);
        continue; //it use when one condition is skip then use continue 
    }
    console.log(`value of  i is ${i}`);
    
}

