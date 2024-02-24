import "./App.css"
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import { useState } from "react";

function App() {
  const [robotArray, setRobotArray] = useState(robots);

  function onSearchChange(event) {
    setRobotArray(robots.filter(robots => robots.name.toLowerCase().includes(event.target.value)));
  }

  return (
    <div className="tc">
      <h1 id="title">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <CardList robots={robotArray}/>
    </div>
  );
}

export default App;
