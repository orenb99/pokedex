import ListItem from "./ListItem";
const List = (props) => (
  <div>
    {props.pokemon.map((item) => (
      <ListItem key={item} name={item} change={props.change} />
    ))}
  </div>
);
export default List;
