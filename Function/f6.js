function findGreatestNumber(arr) {
   
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error("Input must be a non-empty array.");
    }
  
    let greatest = arr[0];
  

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > greatest) {
        greatest = arr[i];
      }
    }
  
 
    return greatest;
  }
  