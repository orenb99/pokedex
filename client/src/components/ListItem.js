const ListItem = (props) => (
  <span className="list-item" onClick={() => props.change(props.name)}>
    {/* <img className="icon" alt="" /> */}
    <p>{props.name}</p>
  </span>
);
export default ListItem;
