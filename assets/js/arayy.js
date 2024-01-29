function findKthLargest(arr, k) {
  if (!Array.isArray(arr) || arr.length === 0 || k <= 0 || k > arr.length) {
      return "Invalid input";
  }

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Return the Kth largest element (zero-based index)
  return arr[arr.length - k];
}

function findKthSmallest(arr, k) {
  if (!Array.isArray(arr) || arr.length === 0 || k <= 0 || k > arr.length) {
      return "Invalid input";
  }

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Return the Kth smallest element (zero-based index)
  return arr[k - 1];
}

// Example usage:
const numbers = [2, 1, 4, 1, 8, 9, 2, 6, 5, 3, 9];
const k = 4; // Find the 4th largest/smallest element


console.log(`The ${k}th largest element is:`, findKthLargest(numbers, k)); 
console.log(`The ${k}th smallest element is:`, findKthSmallest(numbers, k));
