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
  let [validate, isValid] = useState(true);
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
  return (
    <div>
      <h1>Pokedex</h1>
      <Search
        handler={() => changePokemon(input)}
        changeInput={changeInput}
        valid={validate}
      />
      <Info pokemon={pokemon} />
    </div>
  );
}

export default App;
