import "./Card.css";

function Card({ id, name, email }) {
  return (
    <div className="dib br3 pa3 ma2 grow bw2 card">
      <img src={`https://robohash.org/${id}size=200x200`} alt="Dummy alt."/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
