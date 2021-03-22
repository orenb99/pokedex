import { useState } from "react";
const Search = (props) => {
  const [input, setInput] = useState("");
  return (
    <div className="search-div">
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <button
        onClick={() => {
          if (input) return props.handler(input);
        }}
      >
        search pokemon
      </button>
      <p>{props.valid === false ? "Pokemon not found" : ""}</p>
    </div>
  );
};

export default Search;
