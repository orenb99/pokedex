import ListItem from "./ListItem";
const List = (props) => {
  if (Array.isArray(props.pokemon) && props.pokemon.length > 0) {
    if (props.class === "types-list")
      return (
        <div className={props.class}>
          {props.pokemon.map((item) => (
            <ListItem
              key={item}
              name={item}
              change={props.change}
              // img={item.pictures.icon}
            />
          ))}
        </div>
      );
    else
      return (
        <div className={props.class}>
          {props.pokemon.map((item) => (
            <ListItem
              key={item.name}
              name={item.name}
              change={props.change}
              img={item.pictures.icon}
            />
          ))}
        </div>
      );
  }
  return null;
};

export default List;
// props [asdds,sdfsdf,sdfsdf]
//props []
