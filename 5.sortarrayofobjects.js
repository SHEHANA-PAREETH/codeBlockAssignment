const myInput = 
[
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

//to sort the array of objects by title value.
console.log('given input',myInput);
myInput.sort((a,b)=>a.title.localeCompare(b.title))
console.log('sorted output',myInput);