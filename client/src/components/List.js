import ListItem from "./ListItem";
const List = (props) => (
  <div>
    {props.pokemon.map((item) => (
      <ListItem key={item} name={item} />
    ))}
  </div>
);
export default List;
