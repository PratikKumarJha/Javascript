function deleteProperty(obj, key) {
    delete obj[key];
    return obj; 
  }
  
  const person = { name: "Alice", age: 30 };
  const updatedPerson = deleteProperty(person, "age");
  console.log(updatedPerson); 
  