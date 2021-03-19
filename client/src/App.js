import "./Styles/App.css";
import { useState } from "react";
import Info from "./components/Info";
import Search from "./components/Search";
const axios = require("axios");
const route = "http://localhost:3001/api/";
function App() {
  const [input, setInput] = useState("");
  const pokemon = {
    name: "",
    weight: "",
    height: "",
    types: [],
  };
  function changePokemon(input) {
    axios
      .get(route + "pokemon/" + input)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  function changeInput(newInput) {
    setInput(newInput);
    console.log(input);
  }
  return (
    <div>
      <h1>Pokedex</h1>
      <Search handler={() => changePokemon(input)} changeInput={changeInput} />
      <Info pokemon={pokemon} />
    </div>
  );
}

export default App;
