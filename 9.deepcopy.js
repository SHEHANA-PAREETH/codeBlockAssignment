const  myobject = { id: 1, amount: 100}
const mycopiedObject= {...myobject}
mycopiedObject.id = 2
console.log("given and copy objects have diff property while changing only the copied objects propert");
console.log(myobject,mycopiedObject);
//case of nested object
console.log('case of nested object');
const nestedObject = { id: 1, amount: 100,person:{
    name:'shehana',
    age: 25
}
    }
    const nestedCopiedObject = {...nestedObject}
    console.log("initially nested object and its copy  are same");
  console.log(nestedObject);
    console.log(nestedCopiedObject);
    //if we try to change the age 
    nestedCopiedObject.person.age = 30
    console.log('using spread syntax both objects age changes');
    console.log(nestedObject,nestedCopiedObject);
    //change both objects age
    //can be solved by ddep copy

    console.log('using deep copy only the copied object property changes ');
    const nestedObject2= { id: 1, amount: 100,person:{
        name:'shehana',
        age: 25
    }
        }
    const deepCopy= JSON.parse(JSON.stringify(nestedObject2))
    deepCopy.person.age=30
    console.log(nestedObject2,deepCopy);