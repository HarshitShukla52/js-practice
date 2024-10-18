const form = document.querySelector('form')

form.addEventListener('submit',function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelectorAll('#results');

    if(height === ''|| height < 0 || isNaN(height)){
          results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === ''|| weight < 0 || isNaN(weight)){
          results.innerHTML = `Please give a valid height ${weight}`;
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);

        //showin result
        results.innerHTML =`<span>${BMI}<span>`
    }
    
});