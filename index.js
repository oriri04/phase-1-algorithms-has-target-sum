function hasTargetSum(array, target) {
  // Write your algorithm here
}




/**
 * Check if there are two numbers in the array that sum up to the target
 * @param {number[]} nums - The array of numbers
 * @param {number} target - The target sum
 * @returns {boolean} - True if there are two numbers that sum up to the target, false otherwise
 */
function hasTargetSum(nums, target) {
  // Use a Set to store the complements of the numbers seen so far
  const complements = new Set();

  for (const num of nums) {
    // Check if the current number's complement is in the Set
    if (complements.has(num)) {
      return true; // Found a pair that sums up to the target
    }

    // Add the complement of the current number to the Set
    complements.add(target - num);
  }

  // No pair found
  return false;
}

// Export the hasTargetSum function for testing
module.exports = hasTargetSum;


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
