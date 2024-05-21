function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      } 
    }
  } return false
}

/* 
  Write the Big O time complexity of your function here
*/
//Quadratic Time: O(n²)
// or Exponential? 

/* 
  Add your pseudocode here
  Take array
  For each number in array 
  Grab each index
  For each index get second index +1
  Add each array[i] + array[i]+1
  If number is === to target number 
  return true
  Else false
*/

/*
  Add written explanation of your solution here
  The given array needs to have each of its elements added against each other 
  to determine whether the sum is equal to the target
  You need to loop through the array to access the index of each element
  then you'll need to nest a 2nd loop to access access the current index by adding one to its iteration
  once you have access to the correct indices you can add them together and check for equality to the target
  if the sum is equal to the target it will return true otherwise it will return false
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
