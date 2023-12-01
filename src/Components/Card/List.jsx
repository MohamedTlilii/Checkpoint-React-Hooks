import Card from "./Card";
import Data from "../Data";

const List = () => {
  return (
    <div>
      {Data.map((movie, index) => (
        <Card key={index} {...movie} />
      ))}
    </div>
  );
};

export default List;
