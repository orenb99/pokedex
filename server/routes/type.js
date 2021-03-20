const { Router } = require("express");
const type = Router();
const utils = require("../utils/pokeAPI");
const pokemon = require("./pokemon");

type.get("/:type", async (req, res) => {
  let { type } = req.params;
  type = type.toLowerCase();
  let pokemons = await utils.showPokemonByType(type);
  if (typeof pokemons === "string") return res.status(404).send(pokemons);
  res.status(200).send(pokemons);
});

module.exports = type;
