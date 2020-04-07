const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemons (){
  return await axios.get('https://pokeapi.co/api/v2/pokemon?limit=964')
}


async function getThree(){
  let pokes = {}
  let pokemon;
  try{
     pokemon = await Promise.all([axios.get(`${BASE_URL}/${Math.floor(Math.random() * 964)}/`),
                                   axios.get(`${BASE_URL}/${Math.floor(Math.random() * 964)}/`),
                                   axios.get(`${BASE_URL}/${Math.floor(Math.random() * 964)}/`)
                                  ])
  }catch ( err ){
    let failed = $("<h1>")
      .text("sorry... system failed. Press the button again")
      .attr("class", "error")
    $("#cards").html(failed)
  }
  name1 = pokemon[0].data.name
  name2 = pokemon[1].data.name
  name3 = pokemon[2].data.name

  species1 = await axios.get(pokemon[0].data.species.url)
  species2 = await axios.get(pokemon[1].data.species.url)
  species3 = await axios.get(pokemon[2].data.species.url)
  
  for(let flavObj of species1.data.flavor_text_entries){
    if(flavObj.language.name === "en"){
      pokes[name1]= [name1, flavObj.flavor_text, pokemon[0].data.sprites.front_shiny]
    }
  }
  for(let flavObj of species2.data.flavor_text_entries){
    if(flavObj.language.name === "en"){
      pokes[name2] = [name2, flavObj.flavor_text, pokemon[1].data.sprites.front_shiny]
    }
  }
  for(let flavObj of species3.data.flavor_text_entries){
    if(flavObj.language.name === "en"){
      pokes[name3] = [name3, flavObj.flavor_text, pokemon[2].data.sprites.front_shiny]
    }
  }

  return pokes;
}

async function addPokesToPage(){
  $("#cards").empty()
  pokeObj = await getThree();
  for ( let key in pokeObj){
    let pokeDiv = $("<div>")
      .attr("class", "poke-div card")

    let name = $("<b>")
      .text(pokeObj[key][0])
      .attr("class", "name card-title")

    let fact = $("<p>")
      .text(pokeObj[key][1])
      .attr("class", "fact card-text")

    let image = $("<img>")
      .attr("src", pokeObj[key][2])
      .attr("class", "poke-img card-img-top")

    pokeDiv.append(name)
    pokeDiv.append(fact)
    pokeDiv.append(image)
    $("#cards").append(pokeDiv)
  }
}

$("#button").on("click", addPokesToPage)
