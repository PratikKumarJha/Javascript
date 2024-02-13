function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  const obj = { name: "Alice", child: { age: 5 } };
  const copy = deepCopy(obj);
  obj.child.age = 10; 
  