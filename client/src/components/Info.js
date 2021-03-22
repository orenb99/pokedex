import Image from "./Image";
import Type from "./Type";
const Info = ({ pokemon, catchHandler, changeType, caught }) => {
  const { name, weight, height, types, pictures } = pokemon;
  return (
    <div className="info-block">
      <div className="img-block">
        {name !== "" && name !== undefined && (
          <Image
            catch={catchHandler}
            front={pictures["front"]}
            back={pictures["back"]}
            caught={caught}
            name={name}
          />
        )}
      </div>
      <div className="first-info">
        <h3 className="info-name">{name}</h3>
        <span className="info-types">
          {types.map((type) => (
            <Type key={type} type={type} changeType={changeType} />
          ))}
        </span>
      </div>
      <div className="second-info">
        <h2 className="info-height">{"HEIGHT: " + height}</h2>
        <h2 className="info-weight">{"WEIGHT: " + weight}</h2>
      </div>
    </div>
  );
};
export default Info;
