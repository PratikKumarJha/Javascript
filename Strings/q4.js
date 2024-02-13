function findLongestWord(str) {
    const words = str.split(' ');
    return words.reduce((longestWord, currentWord) => {
      return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, ""); 
  }
  const sentence = "This is a sentence with some words of different lengths.";
  const longestWord = findLongestWord(sentence);
  console.log(longestWord);   