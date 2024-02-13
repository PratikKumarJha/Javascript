function hasKey(obj, key) {
    return key in obj;
  }
  
  // Example usage
  const person = { name: "Alice", age: 30 };
  const hasName = hasKey(person, "name");
  const hasJob = hasKey(person, "job"); 
  