const Search = (props) => (
  <span className="search-span">
    <input onChange={(e) => props.changeInput(e.target.value)} type="text" />
    <button onClick={props.handler}>search pokemon</button>
  </span>
);
export default Search;
