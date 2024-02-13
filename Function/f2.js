function concatenateArrays(arr1, arr2) {
    const combinedArray = [];
    for (let i = 0; i < arr1.length; i++) {
      combinedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
      combinedArray.push(arr2[i]);
    }
    return combinedArray;
  }
  
  // Example usage (same as before)
  const combinedArray = concatenateArrays(array1, array2);
  console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
  