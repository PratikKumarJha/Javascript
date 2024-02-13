function getAllValues(obj) {
    const values = [];
    for (const key in obj) {
      values.push(obj[key]);
    }
    return values;
  }

  const values = getAllValues(person);
  console.log(values); 
  