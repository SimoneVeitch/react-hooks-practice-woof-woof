import React, {useState, useEffect} from "react";
import DogBar from "./DogBar"
import DogList from "./DogList";
import Filter from "./Filter";

function App() {
  const [pups, setPups] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [isOn, setIsOn] = useState(false); 

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then((response) => response.json())
    .then((pupData) => {
      setPups(pupData);
  });
}, []);

function handleSelectDog(id) {
  const selected = pups.find((pup) => pup.id === id);
  setSelectedDog(selected);
}

  return (
    <div className="App">
      <Filter isOn={isOn} setIsOn={setIsOn}/>
      <DogBar pups={pups} onSelectDog={handleSelectDog}/>
        <h1>DOGGO:</h1>
        <DogList selectedDog={selectedDog} pups={pups} isOn={isOn}/>
      </div>
  );
}

export default App;
