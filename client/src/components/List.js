import Type from "./Type";
const List = (props) => (
  <div className="list-block">
    <ul>
      <li>Name: {props.name}</li>
      <li>Height: {props.height}</li>
      <li>Weight: {props.weight}</li>
      <li>
        <span>Types: </span>
        <span>
          {props.types.map((type) => (
            <Type type={type} />
          ))}
        </span>
      </li>
    </ul>
  </div>
);
export default List;
