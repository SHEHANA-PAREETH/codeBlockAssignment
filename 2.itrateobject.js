
//QN: Iterate on JSON

//create an object
const myObject={
    name: 'abc',
    age: 20,
    id: 1
    }

    //use for in loop
    console.log("initial object",myObject);
    console.log("after iteration");
    for(let prop in myObject)
    {
        console.log(prop + "-" + myObject[prop]);
    }