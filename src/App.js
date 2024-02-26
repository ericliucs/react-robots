import "./App.css"
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setRobots(data);
      })
      .catch(error => console.error(error.message));
  }, []);

  function onSearchChange(event) {
    setRobots(robots.filter(robots => robots.name.toLowerCase().includes(event.target.value)));
  }

  if (robots.length === 0)
    return <h1>Loading...</h1>;
  return (
    <div className="tc">
      <h1 id="title">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <CardList robots={robots}/>
    </div>
  );
}

export default App;
