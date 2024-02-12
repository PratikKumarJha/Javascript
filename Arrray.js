// Add Element to End of Array
function addElementToEnd(arr, element) {
    return arr.push(element); // returns the new length of the array
  }
  
  // Remove Last Element from Array
  function removeLastElement(arr) {
    return arr.pop(); 
  }
  
  // Sum of Array Elements
  function sumOfArrayElements(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Reverse Array
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // Merge Arrays without Duplicates
  function mergeArraysWithoutDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  
  // Intersection of Two Arrays
  function intersectionOfArrays(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
  }
  
  // Capitalize First Letter of Strings in Array
  function capitalizeFirstLetters(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  }
  
  // Find Longest String in Array
  function findLongestString(arr) {
    return arr.reduce((longest, str) => str.length > longest.length ? str : longest);
  }
  