import pokeball from "../Styles/pokeball.png";

const Image = (props) => (
  <div className="img-div">
    <img
      className="info-img"
      onMouseOver={(e) => (e.target.src = props.back)}
      onMouseLeave={(e) => (e.target.src = props.front)}
      src={props.front}
      alt=""
    />
    <img
      src={pokeball}
      alt={props.caught(props.name)}
      className="catch-button"
      onClick={(e) => {
        props.catch();
      }}
    />
  </div>
);

export default Image;
