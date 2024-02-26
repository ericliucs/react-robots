import "./App.css"
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { useEffect, useRef, useState } from "react";

function App() {
  const allRobots = useRef([]);
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        allRobots.current = data;
        setRobots(data);
      })
      .catch(error => console.error(error.message));
  }, []);

  function onSearchChange(event) {
    setRobots(allRobots.current.filter(robots => robots.name.toLowerCase().includes(event.target.value)));
  }

  return (
    <div className="tc">
      <h1 id="title">Robot Search</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <Scroll>
        <CardList robots={robots}/>
      </Scroll>
    </div>
  );
}

export default App;
