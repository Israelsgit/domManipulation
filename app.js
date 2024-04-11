// // Check if a number is prime or not
// function getPrime() {
//   const number = document.getElementById('input').value;

//   if (isNaN(number)) {
//     document.getElementById('answer').innerText = 'Please enter a valid number.';
//     return;
//   }

//   if (number < 0) {
//     document.getElementById('answer').innerText = 'Please enter a positive number.';
//     return;
//   }

//     let text;
    
//   if (number === 1) {
//     text = `${number} is not a prime number.`;
//   }
    
//   else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         text = `${number} is not a prime number`;
//         break;
//       }
//     }

//     if (!text) {
//       text = `${number} is a prime number.`;
//     }
//   }
//   document.getElementById('answer').innerText = text;
// }

// function getFactorial() {
//   const number = document.getElementById('input').value;

//   if (number < 0 ) {
//     document.getElementById('answer').innerText = "Factorial does not exist.";
//   } else if (number === 0) {
//     document.getElementById('answer').innerText = `The factorial of ${number} is 1`;
//   } else {
//     let factorial = 1
//     for(i=1; i<=number; i++){
//       factorial *= i;
//     }
//     document.getElementById('answer').innerText = `The factorial of ${number} is ${factorial}`;
//   }
// }


function palindromeFunction() {

  const word = document.getElementById('input').value
  const arrayItems = document.getElementById('input').value.split('')

  const arrayItemsReversed = arrayItems.reverse()

  const reverseString = arrayItemsReversed.join('')

  if (document.getElementById('input').value == reverseString)  {
    document.getElementById('answer').innerText = `${word} is a Palindrome`
  } else {
    document.getElementById('answer').innerText = `${word} is not a Palindrome`
  }
}