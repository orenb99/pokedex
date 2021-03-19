import Image from "./Image";
import Type from "./Type";
const Info = ({ pokemon }) => {
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
              <Type type={type} />
            ))}
          </span>
        </li>
      </ul>
      {name !== "" && (
        <Image front={pictures["front"]} back={pictures["back"]} />
      )}
    </div>
  );
};
export default Info;
