function replaceSubstring(str, oldSubstr, newSubstr) {
    return str.replace(oldSubstr, newSubstr);
  }
  const sentence = "Hello, world! How are you?";
  const newSentence = replaceSubstring(sentence, "world", "JavaScript");
  console.log(newSentence); // Output: "Hello, JavaScript! How are you?"
  