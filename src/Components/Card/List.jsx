import Card from "./Card";
import Data from '../Card/Data'

const List = () => {
  return (
    <div className="List" >
      {Data.map((movie, index) => (
        <Card key={index} {...movie} />
      ))}
    </div>
  );
};

export default List;
