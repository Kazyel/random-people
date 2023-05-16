import Card from "../card/Card";
import "./card.css";


const CardList = ({ people }) => {
  return (
    <div className="card-list">
      {people.map((person) => {
        return <Card person={person}/>;
      })}
    </div>
  );
};

export default CardList;
