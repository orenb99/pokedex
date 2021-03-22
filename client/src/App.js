import "./Styles/App.css";
import "./Styles/fonts/font.css";
import { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import song from "./external/song.mp3";
import List from "./components/List";
import Gameboy from "./components/Gamboy";

const axios = require("axios");
const route = "http://localhost:3001/api/";
function App() {
  const [pokemon, setPokemon] = useState({
    name: "",
    weight: "",
    height: "",
    types: [],
  });

  const [collection, setCollection] = useState([]);
  const [validate, isValid] = useState(true);
  const [shownType, changeType] = useState([]);
  // const [shownTypeIcons, setShownTypeIcons] = useState([]);
  useEffect(() => showCollection(), []);
  function caughtPokemon(pokemonName) {
    console.log(collection);
    if (
      collection.find(
        (collectionPokemon) => collectionPokemon.name === pokemonName
      )
    ) {
      return "release";
    } else return "catch";
  }

  function changePokemon(input) {
    axios
      .get(route + "pokemon/" + input)
      .then((res) => {
        setPokemon(res.data);
        isValid(true);
        let audio = [...document.getElementsByClassName("audio")];
        audio[0].play();
      })
      .catch((err) => isValid(false));
  }

  function catchAndRelease() {
    axios
      .get(route + "collection")
      .then((collection) => {
        let data = [...collection.data];
        const idArray = data.map((value) => value.id);
        if (!idArray.includes(pokemon.id)) {
          axios
            .post(route + "collection/catch", pokemon)
            .then((res) => {
              console.log(res.data);
              showCollection();
            })
            .catch((err) => console.log(err.message));
        } else {
          axios
            .delete(route + "collection/release/" + pokemon.name)
            .then((res) => {
              console.log(res.data);
              showCollection();
            })
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
      .catch((err) => console.log(err.message));
  }

  function showCollection() {
    axios
      .get(route + "collection")
      .then((res) => {
        setCollection(res.data);
      })
      .catch((err) => console.log(err.message));
  }
  // async function getIconByType() {
  //   return await Promise.all(
  //     shownType.map(async (value) => {
  //       const pokemon = await axios.get(`${route}/pokemon/${value}`);
  //       return pokemon.data.pictures.icon;
  //     })
  //   );
  // }

  return (
    <div className="app">
      <ReactAudioPlayer className="audio" src={song} controls autoPlay loop />
      <Gameboy
        handler={changePokemon}
        valid={validate}
        pokemon={pokemon}
        catchHandler={catchAndRelease}
        changeType={changeShownType}
        caught={caughtPokemon}
      />
      <List class="types-list" pokemon={shownType} change={changePokemon} />
      <List
        class="collection-list"
        pokemon={collection}
        change={changePokemon}
      />
    </div>
  );
}

export default App;
