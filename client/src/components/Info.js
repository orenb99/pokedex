import Image from "./Image";
import Type from "./Type";
const Info = ({ pokemon, catchHandler, changeType, caught }) => {
  const { name, weight, height, types, pictures } = pokemon;
  return (
    <div className="list-block">
      <ul>
        <li>Name: {name}</li>
        <li>Height: {height}</li>
        <li>Weight: {weight}</li>
        <li>
          <span>Types: </span>
          <span>
            {types.map((type) => (
              <Type key={type} type={type} changeType={changeType} />
            ))}
          </span>
        </li>
      </ul>
      {name !== "" && (
        <Image
          catch={catchHandler}
          front={pictures["front"]}
          back={pictures["back"]}
          caught={caught}
          name={name}
        />
      )}
    </div>
  );
};
export default Info;
