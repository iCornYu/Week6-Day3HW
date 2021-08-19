


const form1 = document.querySelector("#PokeDex")
let pokemon_name = form1.addEventListener("submit", (event) => {
    event.preventDefault();
    pokemon_data = document.querySelector("#pokemon").value.toLowerCase() 
    loadData(pokemon_data)
})



const getData = async(pokemon_name) =>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    const data = await res.json()
    return data

}

const loadData = async (pokemon) => {
    const data = await getData(pokemon);
    console.log(data.types[1])
    if(data.types[1] == null){
        createList(capitalize(data.name), data.sprites.front_default, data.abilities[0].ability.name, 
        data.abilities[1].ability.name, data.types[0].type.name, ' ')
        
    }else{
        createList(capitalize(data.name), data.sprites.front_default, data.abilities[0].ability.name, 
        data.abilities[1].ability.name, data.types[0].type.name, data.types[1].type.name)
    }
}

const createList = (name, pokemon_image, ability1, ability2, type1, type2) => {
    const name1 = `<h1>${name}</h1>`
    const image= `<img src="${pokemon_image}">`
    const table = `
    <table class="table">
        <thead>
          <tr>
            <th scope="col">${name}</th>
            <th scope="col">Type</th>
            <th scope="col">Abilities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowspan="2"><img src="${pokemon_image}"></th>
            <td>${type1}</td>
            <td>${ability1}</td>
          </tr>
          <tr>
            <td>${type2}</td>
            <td>${ability2}</td>
          </tr>
        </tbody>
    </table>
    `
    document.querySelector(".poke-info").insertAdjacentHTML('beforeend',table)
    
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

