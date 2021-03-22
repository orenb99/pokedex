import ListItem from "./ListItem";
const List = (props) => {
  if (Array.isArray(props.pokemon) && props.pokemon.length > 0) {
    if (props.class === "types-list")
      return (
        <div className={props.class}>
          <h1 className="list-title">Type List</h1>
          <div className="list">
            {props.pokemon.map((item) => (
              <ListItem key={item} name={item} change={props.change} />
            ))}
          </div>
        </div>
      );
    else
      return (
        <div className={props.class}>
          <h1 className="list-title">Collection</h1>
          <div className="list">
            {props.pokemon.map((item) => (
              <ListItem
                key={item.name}
                name={item.name}
                change={props.change}
                img={item.pictures.icon}
              />
            ))}
          </div>
        </div>
      );
  }
  return null;
};

export default List;
