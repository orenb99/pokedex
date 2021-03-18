const { Router } = require("express");
const utils = require("../utils/pokeAPI");
const pokemon = Router();

pokemon.get("/", (req, res) => {
  res.send("Pokemon route");
});

module.exports = pokemon;
