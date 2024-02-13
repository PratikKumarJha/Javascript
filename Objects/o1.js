function addKeyValuePair(obj, key, value) {
    obj[key] = value;
    return obj; 
  }

  const person = { name: "Alice", age: 30 };
  const updatedPerson = addKeyValuePair(person, "city", "Wonderland");
  console.log(updatedPerson); // Output: { name: "Alice", age: 30, city: "Wonderland" }
  