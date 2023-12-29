const myArray = [1,2,3,4];
console.log('given input',myArray);
//split first and remainig  elements using rest operator 
const [a,...b] =myArray
console.log('splitted array',[a],b);