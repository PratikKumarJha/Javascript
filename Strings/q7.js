function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }

  const string = "hello world";
  const char = "l";
  const count = countOccurrences(string, char);
  console.log(`The character '${char}' appears ${count} times in '${string}'.`);
  