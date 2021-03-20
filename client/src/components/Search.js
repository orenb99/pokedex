import { useState } from "react";
const Search = (props) => {
  const [input, setInput] = useState("");
  return (
    <span className="search-span">
      <p>{props.valid === false ? "Pokemon not found" : ""}</p>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <button onClick={() => props.handler(input)}>
        search pokemon
      </button>
    </span>
  );
};

export default Search;
