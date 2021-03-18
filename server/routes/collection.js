const { Router } = require("express");

const collection = Router();

collection.get("/", (req, res) => {
  res.send("collection route");
});

module.exports = collection;
