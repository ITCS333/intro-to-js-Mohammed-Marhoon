/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  // TODO: Implement this function.
  c=a+b;
  return c;
}

/**
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  // TODO: Implement this function.
  if(str.length==0){
    return '';
  }
  x=str.length-1;
  r_str='';
  c;
  for(i=0;i<=x;i++){
    c=str.charAt(x-i);
    r_str=r_str+c;
  }
  return r_str;
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The largest number in the array. Return null if the array is empty.
 */
function findLargest(numbers) {
  // TODO: Implement this function.
  if(numbers.length==0){
    return null;
  }else{
    s_numbers=numbers.sort((a, b) => b - a);
    return s_numbers[0];
  }
}

/**
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * The check should be case-insensitive.
 */
function isPalindrome(str) {
  // TODO: Implement this function.
  str=str.toLowerCase();
  str2=str.split('').reverse().join('');
  
  if(str2 === str){
    return true;
  }else{
    return false;
  }
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number[]} A new array containing only the even numbers from the original array.
 */
function filterEvenNumbers(numbers) {
  // TODO: Implement this function.
  let even_numbers=numbers.filter(num => num%2 == 0);
  return even_numbers;
}


// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};

