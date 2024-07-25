// Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

function isPalindrome(str) {
    // Base cases:
    // Empty string or single character is a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Compare first and last characters, ignoring case and non-alphanumeric characters
    const firstChar = str[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    const lastChar = str[str.length - 1].toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // If characters don't match, it's not a palindrome
    if (firstChar !== lastChar) {
      return false;
    }
  
    // Recursively check the substring without the first and last characters
    return isPalindrome(str.slice(1, -1));
  }
  
  // Example usage:
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("deed")); // Output: false
  