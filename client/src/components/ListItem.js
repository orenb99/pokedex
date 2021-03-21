const ListItem = (props) => (
  <div className="list-item" onClick={() => props.change(props.name)}>
    <img className="icon" src={props.img} alt="" />
    <span>{props.name}</span>
  </div>
);
export default ListItem;
