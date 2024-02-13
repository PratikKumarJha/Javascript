function hoursToSeconds(hours) {
    // Input validation: check if hours is a valid number
    if (typeof hours !== 'number' || isNaN(hours)) {
      throw new TypeError('Input must be a number.');
    }
  
    // Ensure a non-negative input
    if (hours < 0) {
      throw new RangeError('Input hours cannot be negative.');
    }
  
    // Conversion: multiply hours by seconds per hour (3600)
    const seconds = hours * 3600;
  
    // Return the number of seconds
    return seconds;
  }
  
  // Example usage
  try {
    const seconds1 = hoursToSeconds(2.5);
    console.log(seconds1); // Output: 9000
  
    const seconds2 = hoursToSeconds(-3); // Throws RangeError
    console.log(seconds2); // Not reached
  } catch (error) {
    console.error(error.message);
  }
  