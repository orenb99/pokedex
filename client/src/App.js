import "./Styles/App.css";
import "./Styles/fonts/stylesheet.css";
import { useState } from "react";
import Info from "./components/Info";
import Search from "./components/Search";
import List from "./components/List";

const axios = require("axios");
const route = "http://localhost:3001/api/";
function App() {
  // const [input, setInput] = useState("");// Put input state inside Search locally, retrieve outwards only to search
  const [pokemon, setPokemon] = useState({
    name: "",
    weight: "",
    height: "",
    types: [],
  });
  const [validate, isValid] = useState(true);
  const [shownType, changeType] = useState([]);

  function changePokemon(input) {
    axios
      .get(route + "pokemon/" + input)
      .then((res) => {
        setPokemon(res.data);
        isValid(true);
      })
      .catch((err) => isValid(false));
  }
  // No need for helper function, putting state inside Search component + No extra logic happening.
  // function changeInput(newInput) {
  //   setInput(newInput);
  // }

  function catchAndRelease() {
    axios
      .get(route + "collection")
      .then((collection) => {
        let data = [...collection.data]; // spread operator makes deep copy ONLY if data is not nested (Types is nested?) Not sure types wil be copied
        const idArray = data.map((value) => value.id);
        if (!idArray.includes(pokemon.id)) {
          axios
            .post(route + "collection/catch", pokemon)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));
        } else {
          axios
            .delete(route + "collection/release/" + pokemon.name)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));
        }
      })
      .catch((err) => console.log(err.message));
  }

  function expandType(type) {
    axios
      .get(route + "type/" + type)
      .then((res) => {
        changeType(res.data);
      })
      .catch((err) => console.log(err.message));
  }

  function changeShownType(newType) {
    axios
      .get(route + "type/" + newType)
      .then(() => expandType(newType))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <Search
        handler={changePokemon} // Have to pass the handler to an HTML element.
        valid={validate}
      />
      <Info
        pokemon={pokemon}
        catchHandler={catchAndRelease}
        changeType={changeShownType}
      />
      <List pokemon={shownType} change={changePokemon} />
    </div>
  );
}

export default App;
