import { useState } from "react";
import "./App.css";
import data from "./components/data";
import List from "./components/List";

function App() {
const[people, setPeople] = useState(data)

  return (
    <main className="container">
      <h3>{people.length} birthdays today</h3>
      <List people = {people} />
      <button onClick={()=>{
        console.log('you clicked me')
        setPeople([])
      }}>Clear ALL</button>
    </main>
  );
}

export default App;
