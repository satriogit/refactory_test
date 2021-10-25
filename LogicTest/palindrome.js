function palindrome(str) {
  let newStr = str.toLowerCase();
  if (newStr == newStr.split('').reverse().join('')) {
    return 'palindrome';
  } else {
    return 'not palindrome';
  }
}

palindrome('Malas');

console.log(palindrome('Radar'));
console.log(palindrome('Malas'));
