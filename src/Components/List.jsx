import Card from "./Card";
import Data from "../Data";
import Button from "./Button";

const List = ({ search }) => {
  return (
    <div className="List-containr">
      <div className="List-containr-hero">
        <h1>Movies</h1>
        <h4>Genre:</h4>
        <div className="List-containr-btns">
          <Button content="Action" />
          <Button content="Adventure" />
          <Button content="Comedy" />
          <Button content="Romance" />
          <Button content="Sci-Fi" />
          <Button content="Horro" />
          <Button content="Fantacy" />
        </div>
        <div className="intro-containr">
          <h2>Latest Movies</h2>
          <Button content="View All" />
        </div>
      </div>
      {Data.filter((movie) =>
        movie.tittle.toLowerCase().includes(search.toLowerCase())
      ).map((movie, i) => (
        <Card key={i} {...movie} />
      ))}
    </div>
  );
};

export default List;
