const Search = (props) => (
  <span className="search-span">
    <p>{props.valid === false ? "Pokemon not found" : ""}</p>
    <input onChange={(e) => props.changeInput(e.target.value)} type="text" />
    <button onClick={props.handler}>search pokemon</button>
  </span>
);
export default Search;
