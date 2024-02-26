import "./CardList.css";
import Card from "./Card";

function CardList({ robots }) {
  if (robots.length === 0)
    return <h1 id="no-results">Sorry, we couldn't find any results.</h1>
  return <>
    { robots.map((user, index) =>
      <Card key={robots[index].id} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>) }
  </>;
}

export default CardList;
