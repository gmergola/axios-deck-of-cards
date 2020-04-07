const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemons (){
  return await axios.get('https://pokeapi.co/api/v2/pokemon?limit=964')
}


async function getThree(){

let pokemon = await Promise.all([axios.get(`${BASE_URL}2/`) ,
                                 axios.get(`${BASE_URL}300/`), 
                                 axios.get(`${BASE_URL}564/`)])

let name1 = pokemon[0].data.name;
let name2 = pokemon[1].data.name;
let name3 = pokemon[2].data.name;
// let species1 = pokemon[0].data.species;
// console.log(pokemon[0].data);

let species1 = await axios.get(pokemon[0].data.species.url);
let species2 = await axios.get(pokemon[1].data.species.url);
let species3 = await axios.get(pokemon[2].data.species.url);

console.log(name1, species1.data.flavor_text_entries[17].flavor_text);


}

// axios.get('http://numbersapi.com/33/trivia?json')
// .then( (data) => {
//   console.log("second!")
//   console.log(data);
// })

// console.log("genna")

// async function mulNum (){
//   setOfNums = await axios.get('http://numbersapi.com/1..3,10')

//   for(let num in setOfNums.data){
//     console.log(setOfNums.data[num])
//   }
// }

// axios.get('http://numbersapi.com/1..3,10')
// .then((response) => {
//   for(let num in response.data){
//     console.log(response.data[num])
//   }
// })

// async function get4Facts(){
//   let facts = await Promise.all([
//     axios.get('http://numbersapi.com/33/trivia'),
//     axios.get('http://numbersapi.com/33/trivia'),
//     axios.get('http://numbersapi.com/33/trivia'),
//     axios.get('http://numbersapi.com/33/trivia')
//   ])

//   console.log(`The first fact is ${facts[1].data}`)
//   console.log(`The second fact is ${facts[1].data}`)
//   console.log(`The third fact is ${facts[2].data}`)
//   console.log(`The fourth fact is ${facts[3].data}`)
// }



