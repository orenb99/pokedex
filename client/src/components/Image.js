const Image = (props) => (
  <div className="img-div">
    <img src={props.front} alt="" />
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
