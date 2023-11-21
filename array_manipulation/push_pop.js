

// add or remove elements from array.

const fruits = ["Apple", "Orange", "Grape", "Kiwi", "Pear", "Mango" ]

//push
fruits.push('Avocado');
console.log(fruits);

//pop
fruits.pop();
console.log(fruits);

//shift
fruits.shift();
console.log(fruits);

//unshift
fruits.unshift('Avocado');
console.log(fruits);

//add using splice 
fruits.splice(4,0,'Berry');
console.log(fruits);


//replace using splice 
fruits.splice(4,1,'Tomato');
console.log(fruits);