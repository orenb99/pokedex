const { Router } = require("express");
const utils = require("../utils/pokeAPI");
const pokemon = Router();

pokemon.get("/", (req, res) => {
  res.send("Pokemon route");
});

pokemon.get("/:key", async (req, res) => {
  let { key } = req.params;
  key = key.toLowerCase();
  let pokemon = await utils.getPokemonByKey(key);
  if (typeof pokemon === "string") {
    res.status(404).send(pokemon);
  } else res.status(200).send(pokemon);
});

module.exports = pokemon;
