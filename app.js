// Check if a number is prime or not
function getPrime() {
  const number = document.getElementById('input').value;

  if (isNaN(number)) {
    document.getElementById('answer').innerText = 'Please enter a valid number.';
    return;
  }

  if (number < 0) {
    document.getElementById('answer').innerText = 'Please enter a positive number.';
    return;
  }

    let text;
    
  if (number === 1) {
    text = `${number} is not a prime number.`;
  } 
    
  else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        text = `${number} is not a prime number`;
        break;
      }
    }

    if (!text) {
      text = `${number} is a prime number.`;
    }
  }
  document.getElementById('answer').innerText = text;
}