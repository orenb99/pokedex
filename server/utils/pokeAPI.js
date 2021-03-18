const { default: axios } = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// You can use this file to write helper functions
function getData(key) {
  let pokemon=axios.get(POKEAPI_BASE_URL+"/"+key).then((res) => {
    const { name, height, weight, id } = res;
    const types = res.type.map((item) => item.type.name);
    const { front_default, back_default } = res.sprites;
    const smallIcon =res.sprites.versions["generation-viii"].icons.front_default;
    return {
        id:id,
        name:name,
        height:height,
        weight:weight,
        types=[...types],
        pictures={
            front:front_default,
            back:back_default,
            icon:smallIcon,
        }
    }
  }).catch(e=>{
      return "Invalid Key"
  });

  return pokemon;
}

module.exports ={getData};