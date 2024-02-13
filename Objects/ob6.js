function objectLength(obj) {
    return Object.keys(obj).length;
  }
  
  const person = { name: "Alice", age: 30, city: "Wonderland" };
  const length = objectLength(person);
  console.log(length); 
  