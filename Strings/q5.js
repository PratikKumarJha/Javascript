function countVowels(str) {
    const vowels = "aeiouAEIOU";

    let count = 0;

    for (let i = 0; i < str.length; i++) {

      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  const sentence = "This is a string with vowels.";
  const vowelCount = countVowels(sentence);
  console.log(`Number of vowels: ${vowelCount}`); 
  