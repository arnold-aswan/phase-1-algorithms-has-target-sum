function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for(let j = i+1; j<array.length; j++) {
      let sum = array[i] + array[j]
      if(sum === target) {
        return true
      }
    }
  }
  return false
}
hasTargetSum([1, 2, 5],4)

/* 
  Write the Big O time complexity of your function here
  time: O(n*2)
  space: O(n)
*/

/* 
  Add your pseudocode here

  target = sum of two array elements
  iterate through the  array elements with a for loop
  iterae through the array elements with another for loop to sum two elements
  return the sum of the two elements
  
  if the sum of the two elements === target 
    then return true 
    else return false
*/

/*
  Add written explanation of your solution here
  target = sum of two array elements
  iterate through the  array elements with a for loop
  iterae through the array elements with another for loop to sum two elements
  return the sum of the two elements
  compare if sum matches up with the target
  
  if the sum of the two elements === target 
    then return true 
    else return false
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
