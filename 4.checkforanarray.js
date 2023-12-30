//QN: Write a function to check whether an `input` is an array or not.
const text1 = "w3schools"
const text2= [1,2,4,0]
console.log('GIven inputs are:',text1,":",text2);

let result1 = Array.isArray(text1);
let result2 = Array.isArray(text2);
if(result1){
    console.log(text1,"is an array");
}
else{
    console.log(text1,"is not an array");
}
if(result2){
    console.log(text2,"is an array");
}
else{
    console.log(text2,"is not an array");
}