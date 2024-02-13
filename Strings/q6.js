function containsSubstring(str, subStr) {
    return str.includes(subStr);
  }
  
  // Example usage
  const mainStr = "Hello, world!";
  const subStr = "world";
  const hasSubStr = containsSubstring(mainStr, subStr);
  
  console.log(`The string '${mainStr}' contains substring '${subStr}'? ${hasSubStr}`); // Output: The string 'Hello, world!' contains substring 'world'? true
  