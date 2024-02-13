function fibonacci(n) {
    
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
      throw new Error("Input must be a non-negative integer.");
    }
  
    
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  
    
    const memo = {};
    function memoizedFibonacci(n) {
      if (memo[n] !== undefined) {
        return memo[n];
      } else {
        const result = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
        memo[n] = result;
        return result;
      }
    }
  
    return memoizedFibonacci(n);
  }
  try {
    const result1 = fibonacci(5);
    console.log(result1);
  
    const result2 = fibonacci(-1); 
    console.log(result2); 
  } catch (error) {
    console.error(error.message);
  }
  