const { Router } = require("express");

const pokemon = Router();

pokemon.get("/", (req, res) => {
  res.send("Pokemon route");
});

module.exports = pokemon;
