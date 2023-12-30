//QN:Take a array and split it into 2 array. Array 1 should have 0th value and rest of the values should be in
//array 2

const myArray = [1,2,3,4];
console.log('given input',myArray);
//split first and remainig  elements using rest operator 
const [a,...b] =myArray
console.log('splitted array',[a],b);