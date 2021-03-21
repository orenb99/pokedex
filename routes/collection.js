const { Router } = require("express");

const collection = Router();

let ourCollection = [];

collection.get("/", (req, res) => {
  console.log(ourCollection);
  if (ourCollection.length === 0) res.status(200).send([]);
  else res.status(200).send(ourCollection);
});

collection.post("/catch/", (req, res) => {
  const { body } = req;
  try {
    ourCollection.push(body);
    res.status(201).send(`You caught a ${body.name}!`);
  } catch (e) {
    res.status(400).send("Invalid Pokemon");
  }
});

collection.delete("/release/:name", (req, res) => {
  const { name } = req.params;
  const filteredCollection = ourCollection.filter(
    (value) => value.name !== name
  );
  if (ourCollection.length === filteredCollection.length)
    return res.status(400).send("Invalid Id");
  ourCollection = filteredCollection;
  res.status(200).send(name + " released!");
});

module.exports = collection;
