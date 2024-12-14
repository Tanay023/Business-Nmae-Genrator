function generateBusinessName() {
    // Get input values
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
  
    // Generate three unique random numbers from 1 to 3
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 3) + 1;     // math floor use for rounding down the number gennrated by random number 
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
  
    // Assign input values to variables based on random numbers
    const variable1 = randomNumbers[0] === 1 ? input1 : randomNumbers[0] === 2 ? input2 : input3;
    const variable2 = randomNumbers[1] === 1 ? input1 : randomNumbers[1] === 2 ? input2 : input3;
    const variable3 = randomNumbers[2] === 1 ? input1 : randomNumbers[2] === 2 ? input2 : input3;
  
    // Concatenate the variables to form the business name
    const businessName = variable1 + variable2 + variable3;
  
    // Display the generated business name
    document.getElementById('result').textContent = businessName;
  }