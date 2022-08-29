function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;

}

function reverseString(word){
  return word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  isPalindrome function - receive one argument(string) 
if string === palindrome  - return true, else return false
*/ 


/*
  Add written explanation of your solution here
  define my isPalindrome function with one argument(string)
  create a variable called actualWord and set it to the string argument
  create a variable called reversedWord using the split(), reverse(), and join() methods and set it to the string argument reversed
  NB. the split() method splits a string into an array of substrings, the reverse() method reverses the order of the elements in an array, and the join() method joins all elements of an array into a string
  if the actual word is strictly equal to the reversed word - return true, and false if not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
