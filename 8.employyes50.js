//QN: Write a program to print employees with age > 50. It is important to use ES6 filter
//function

const myArray =  [{"age": 10, "name":"employee1"},{"age":50,"name":"emp2"},{"age":54,"name":"emp3"}]
console.log("given list",myArray);
const requiredEmployees = myArray.filter((obj)=> obj.age>50)
console.log("requiredEmployees age > 50");
console.log(requiredEmployees);
const requiredEmployees2 = myArray.filter((obj)=> obj.age>=50)
console.log("requiredEmployees age >= 50");
console.log(requiredEmployees2);