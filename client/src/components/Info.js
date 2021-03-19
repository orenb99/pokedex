import List from "./List";

const Info = ({ pokemon }) => {
  const { name, weight, height, types } = pokemon;
  return (
    <div>
      <List name={name} weight={weight} height={height} types={types} />
    </div>
  );
};
export default Info;
