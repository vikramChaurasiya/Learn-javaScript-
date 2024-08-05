const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === ''|| height < 0 || isNaN(height)){
        results.innerHTML =`Please give a value height${height}`;
    } else if(weight === ''|| weight < 0 || isNaN(weight)){
        results.innerHTML =`Please give a value weight${weight}`;
    } else {
        const bmi = (weight/((weight*height)/10000)).toFixed(2);
        //show the result
       
        results.innerHTML= `<span>BMI = ${bmi}<span/>`;
        if(bmi<18.6){
            results.append("Under Weight");
        } else if(bmi>=118.6 && bmi<=24.9){
            results.append(" Normal weight");
        } else{
            results.append(" Overweight");
        }
    }
    
});

