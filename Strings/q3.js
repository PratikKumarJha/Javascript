function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
  const sentence = "hello world";
  const titleCaseSentence = toTitleCase(sentence);
  console.log(titleCaseSentence); 
  
