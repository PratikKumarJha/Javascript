function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  const person1 = { name: "Alice", age: 30 };
  const person2 = { city: "Wonderland", job: "Software Engineer" };
  
  const mergedPerson = mergeObjects(person1, person2);
  console.log(mergedPerson);
  