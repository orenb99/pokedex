const Type = (props) => (
  <span
    onClick={() => {
      props.changeType(props.type);
    }}
    className={`type-span ${props.type}`}
  >
    <h2>{props.type}</h2>
  </span>
);

export default Type;
