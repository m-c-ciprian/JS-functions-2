/**
 * Calculation of Amounts:
 * Defines a function called computeSum which
 * takes two parameters and returns their sum.
 */
function computeSum(a, b) {
    let sum = a + b;
    return sum;
}

// Example function call
let rezultat = computeSum(5, 7);
console.log(rezultat); //  12


/**
 * Determining Parity:
 * Write a function called isEven that receives a number
 * and returns true if the number is even and false if it is odd
 */
function isEven(numar) {
    return numar % 2 === 0;
}

// Example function call
let result1 = isEven(4);
console.log(result1); // true

var result2 = isEven(7);
console.log(result2); //  false

/**
 * String Concatenation:
 * Create a function called concatenateStrings that receives
 * two strings and concatenates them, returning the result.
 */
function concatenateStrings(string1, string2) {
    const result = string1 + string2;
    return result;
}

// Example function call
const firstString = "Hello, ";
const secondString = "World!";
const finalResult = concatenateStrings(firstString, secondString);
console.log(finalResult); // Will display "Hello, World!"

/**
 * Palindrome Check:
 * Defines a function called isPalindrome that receives a string and
 * returns true if it is a palindrome and false otherwise.
 */
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Compare the original string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example function calls
const result = isPalindrome("racecar");
console.log(result1); // Will display true

const result2 = isPalindrome("hello");
console.log(result2); // Will display false


/**
 * Random Number Generation:
 * Write a function called generateRandomNumber that
 * returns a random integer between 1 and 100.
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Example function call
const randomNum = generateRandomNumber();
console.log(randomNum); // Will display a random integer between 1 and 100


/**
 * Power Calculation:
 * Implements a function called raiseToPower that receives
 * two numbers (the base and the exponent) and returns the result of raising to the power.
 */
// Implementarea funcției pentru ridicarea la putere
function raiseToPower(base, exponent) {
    return Math.pow(base, exponent);
}

// Example function call
const raised = raiseToPower(2, 3);
console.log(raised); //  8


/**
 * Calculation of Average:
 * Create a function called calculateAverage that receives
 * an array of numbers and returns their average.
 */
// Implementation of the function to calculate the mean
function calculateAverage(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    return average;
}

// Example function call
const numbersArray = [10, 15, 20, 25, 30];
const average = calculateAverage(numbersArray);
console.log(average); // 20
  

/**
 * Convert to Uppercase:
 * Defines a function called transformToUppercase
 * which takes a string and returns the string with all
 * letters converted to uppercase.
 */
// Implementation of the function for transforming to uppercase
function transformToUppercase(inputString) {
    return inputString.toUpperCase();
}

// Example function call
const originalString = "Hello, World!";
const transformedString = transformToUppercase(originalString);
console.log(transformedString); // Will display "HELLO, WORLD!"


/**
 * Prime Number Verification:
 * Write a function called isPrimeNumber that receives a number
 * and returns true if prime and false otherwise.
 */
// Implementation of the function for checking prime numbers
function isPrimeNumber(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
}
  
// Example function calls
const prime = isPrimeNumber(7);
console.log(prime); // Will display true

const notPrime = isPrimeNumber(14);
console.log(notPrime); // Will display false
  

