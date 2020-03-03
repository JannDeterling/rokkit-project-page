import "./card.scss";

const Card = props => {
  return (
    <div className="card-box">
      <div className="card-heading">
        <h1>{props.heading}</h1>
      </div>
      <div className="card-content">{props.children}</div>
    </div>
  );
};

export default Card;
