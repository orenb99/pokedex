const Image = (props) => (
  <div className="img-div">
    <img
      onMouseOver={(e) => (e.target.src = props.back)}
      onMouseLeave={(e) => (e.target.src = props.front)}
      src={props.front}
      alt=""
    />
    <button
      onClick={(e) => {
        props.catch();
      }}
    >
      catch
    </button>
  </div>
);

export default Image;
