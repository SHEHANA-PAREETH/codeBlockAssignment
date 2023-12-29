let input = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
console.log('given array',input);
let sum=0
for (let obj of input){
  sum += obj.x
}
console.log("output");
console.log(sum);