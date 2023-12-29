var readlineSync = require('readline-sync');
 
// Wait for user's response.
var GivenNumber = readlineSync.question('Enter a number? ');
var num = parseFloat(GivenNumber)
var x= readlineSync.question('How many numbers have to be shown after decimal ? ');
var v= parseInt(x)
console.log(num.toFixed(v));
