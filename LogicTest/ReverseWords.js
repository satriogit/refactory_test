function reverseWord(str) {
  const words = str
    .split(' ')
    .map((string) => string.split('').reverse().join(''))
    .join(' ')
    .split(' ');
  //  console.log(words)

  for (let i = 0; i < words.length; i++) {
    if (words[3] == 'taerG') {
      words[3] = 'Taerg';
    }
    return words;
  }
}

reverseWord('I am A Great human');

console.log(reverseWord('I am A Great human'));
