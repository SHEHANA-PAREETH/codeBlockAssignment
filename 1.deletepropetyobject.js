//create an object
const myObj  = {
    name: "abc",
    age: 10,
    id: 1
    }
    console.log("Initial object",myObj);
   
    // to Delete the properties "name" and "age" ,we can use delete operator
     delete myObj.age
     delete myObj.name
     console.log("after deletion",myObj);