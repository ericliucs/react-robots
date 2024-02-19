import Card from "./Card";


function CardList({ robots }) {
  return <>
    { robots.map((user, index) =>
      <Card key={robots[index].id} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>) }
  </>;
}

export default CardList;
