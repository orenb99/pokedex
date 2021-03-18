const { Router } = require("express");

const type = Router();

type.get("/", (req, res) => {
  res.send("type route");
});

module.exports = type;
