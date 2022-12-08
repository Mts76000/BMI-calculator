window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
  
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Taille invalide";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Poids invalide";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Insuffisance pondérale (maigreur) : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 25) 
            result.innerHTML = 
                `Corpulence normale : <span>${bmi}</span>`;

                else if (bmi >= 25 && bmi < 30) 
            result.innerHTML = 
                `Surpoids : <span>${bmi}</span>`;

                else if (bmi >= 30 && bmi < 35) 
            result.innerHTML = 
                `Obésité modérée : <span>${bmi}</span>`;

                else if (bmi >= 35 && bmi < 40) 
            result.innerHTML = 
                `Obésité sévère : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Obésité morbide ou massive : <span>${bmi}</span>`;
    }
}