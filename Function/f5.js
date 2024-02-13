function factorial(number) {
    // Input validation: check if number is a non-negative integer
    if (typeof number !== "number" || number < 0 || !Number.isInteger(number)) {
      throw new Error("Input must be a non-negative integer.");
    }
  
    // Base case: factorial of 0 is 1
    if (number === 0) {
      return 1;
    }
  
    // Recursive case: factorial of n is n * factorial(n-1)
    else {
      return number * factorial(number - 1);
    }
  }
  
  // Example usage
  try {
    const result1 = factorial(5);
    console.log(result1); // Output: 120
  
    const result2 = factorial(-2); // Throws error
    console.log(result2); // Not reached
  } catch (error) {
    console.error(error.message);
  }
  