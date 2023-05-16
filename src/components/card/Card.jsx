import "./Card.css";

const Card = ({ person }) => {
  const { id, name } = person;
  return (
    <div className="card-container" key={id}>
      <img
        className="card-image"
        alt={`Monster ${name}`}
        src={`https://api.dicebear.com/6.x/lorelei/svg?seed=${id}`}
      ></img>
      <p>{name}</p>
    </div>
  );
};

export default Card;
