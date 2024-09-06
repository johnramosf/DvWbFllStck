const oneJoke = require('one-liner-joke');
  
const myJoke = oneJoke.getRandomJoke();
console.log("Chiste aleatorio: "); 
console.log(myJoke.body);
console.log("\nCategorías: ");
console.log(myJoke.tags.join(", "));
     
