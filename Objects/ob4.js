function getAllKeys(obj) {
    return Object.keys(obj);
  }


  const person = { name: "Alice", age: 30, city: "Wonderland" };
  const keys = getAllKeys(person);
  console.log(keys); 
  