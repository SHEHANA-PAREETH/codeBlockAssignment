//QN: Write a program to flatten a nested (any depth) array. If you pass shallow, the array will
//only be flattened a single level.

const inputArray=  [1, [2], [3, [[4]]],[5,6]]

console.log("input Array",inputArray);
console.log("flattened Array");
//Setting the depth value to Infinity to deep flatten the array
console.log(inputArray.flat(Infinity));