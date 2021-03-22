import Search from "./Search";
import Info from "./Info";

const Gameboy = (props) => (
  <div className="gameboy-div">
    <h1>Pokedex</h1>
    <Search handler={props.handler} valid={props.valid} />
    <Info
      pokemon={props.pokemon}
      catchHandler={props.catchHandler}
      changeType={props.changeType}
      caught={props.caught}
    />
  </div>
);

export default Gameboy;
