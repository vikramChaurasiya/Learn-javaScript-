// async function getAlluser(){
//     try {
//         const response = await fetch('https://api.github.com/users/vikramChaurasiya');
//         const data = await response.json();
//         console.log(data);
//         // console.log(response);
        
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }
// getAlluser();



// *******************************2nd methode*************************** 


fetch('https://api.github.com/users/vikramChaurasiya')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data.url);
    // console.log(data);
    
})
.catch((error) => console.log(error))