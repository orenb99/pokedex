import ListItem from "./ListItem";
const List = (props) => {
  if (props.class === "types-list")
    return (
      <div className={props.class}>
        {props.pokemon.map((item) => (
          <ListItem key={item} name={item} change={props.change} />
        ))}
      </div>
    );
  else
    return (
      <div className={props.class}>
        {props.pokemon.map((item) => (
          <ListItem key={item.name} name={item.name} change={props.change} />
        ))}
      </div>
    );
};

export default List;
// props [asdds,sdfsdf,sdfsdf]
//props []
