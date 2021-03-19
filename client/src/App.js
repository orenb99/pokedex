import "./Styles/App.css";
import { useState } from "react";
import Info from "./components/Info";
import Search from "./components/Search";
const axios = require("axios");
const route = "http://localhost:3001/api/";
function App() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    weight: "",
    height: "",
    types: [],
  });
  const [validate, isValid] = useState(true);

  function changePokemon(input) {
    axios
      .get(route + "pokemon/" + input)
      .then((res) => {
        setPokemon(res.data);
        isValid(true);
      })
      .catch((err) => isValid(false));
  }

  function changeInput(newInput) {
    setInput(newInput);
  }

  function catchPokemon() {
    axios
      .post(route + "collection/catch", pokemon)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  function releasePokemon() {
    axios
      .delete(route + "collection/release/:" + pokemon.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1>Pokedex</h1>
      <Search
        handler={() => changePokemon(input)}
        changeInput={changeInput}
        valid={validate}
      />
      <Info pokemon={pokemon} catchHandler={catchPokemon} />
    </div>
  );
}

export default App;
