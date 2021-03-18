const { default: axios } = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// You can use this file to write helper functions
function getPokemonByKey(key) {
  return axios
    .get(POKEAPI_BASE_URL + "/pokemon/" + key)
    .then((result) => {
      const data = result.data;
      const { name, height, weight, id } = data;
      const types = data.types.map((item) => item.type.name);
      const { front_default, back_default } = data.sprites;
      const smallIcon =
        data.sprites.versions["generation-viii"].icons.front_default;
      return {
        id: id,
        name: name,
        height: height,
        weight: weight,
        types: types,
        pictures: {
          front: front_default,
          back: back_default,
          icon: smallIcon,
        },
      };
    })
    .catch((e) => {
      return "Pokemon not found";
    });
}

function showPokemonByType(type) {
  return axios
    .get(POKEAPI_BASE_URL + "/type/" + type)
    .then((result) => {
      const pokemon = result.data.pokemon;
      return pokemon.map((value) => value.pokemon.name);
    })
    .catch((e) => {
      return "Type nof found";
    });
}

module.exports = { getPokemonByKey, showPokemonByType };
