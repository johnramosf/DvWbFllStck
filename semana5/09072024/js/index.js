/*fetch('https://pokeapi.co/api/v2/pokemon/')
.then( res => res.json())
.then(data => {console.log(data.results)})
.catch(err => {console.log(err)});*/

/*fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.text())
.then(miResultado => {var posts = JSON.parse(miResultado); console.log(posts[1])});

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))*/

/*const obtenerPokemones = async ()=>{
   try{
       const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
       const data = await res.json();
       console.log(data.results);
       const names = data.results.map(poke => poke.name);
       console.log(names);  
    }catch(err){
    console.log(err);
   }
}
obtenerPokemones();
const obtenerPokemones = async ()=>{
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();
        //console.log(data.results);
        const arrayNombres = data.results.filter(poke => poke.poder>5);
        array = data.results                 
        console.log(names);  
     }catch(err){
     console.log(err);
    }
 }
 obtenerPokemones();*/

 const obtenerPokemones = async ()=>{
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();
        //console.log(data.results);
        const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur');                 
        console.log(arrayNombres);  
     }catch(err){
     console.log(err);
    }
 }
 obtenerPokemones();