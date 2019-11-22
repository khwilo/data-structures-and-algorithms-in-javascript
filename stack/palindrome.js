const isPalindrome = word => {
  const letters = []; // this is the stack
  let reverseWord = '';
  let result = false;

  // put the letters of word into the stack
  for (let index = 0; index < word.length; index += 1) {
    letters.push(word[index]);
  }

  // pop off the stack in reverse order
  for (let index = 0; index < word.length; index += 1) {
    reverseWord += letters.pop();
  }

  if (reverseWord === word) {
    result = true;
  }

  return result;
};

console.log(isPalindrome('racecar'));
