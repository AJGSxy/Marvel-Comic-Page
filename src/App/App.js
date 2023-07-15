import { useState, useEffect } from "react";
import './App.css';
import Card from "./components/Card/Card";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=894be75e1373b9de119cf9a713e53358&hash=486d853d56cba4b67abc43837d45b56b")
      .then((response) => response.json())
      .then((data) => setData(data.data.results))
  }, [])
  console.log(data)
  return (
    <div className="App">
      <h1>PruebA</h1>
      <div className="card">

        <ul>
          {data?.map((user, index) => (
            <Card name={user.name} key={user.id} />))}
        </ul>
      </div>
    </div>
  );
}
export default App;


