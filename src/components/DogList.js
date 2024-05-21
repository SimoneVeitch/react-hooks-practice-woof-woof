import React from "react";
import DogCard from "./DogCard";

function DogList({ pups, isOn, selectedDog }) {
    const filteredDogs = isOn ? pups.filter((dog) => dog.isGoodDog) : pups;
  
    return (
        <div id="dog-summary-container">
          {selectedDog ? <DogCard {...selectedDog} /> : null}
          {isOn ? filteredDogs.map((dog) => (
            <DogCard key={dog.id} {...dog} />
          )) : null}
        </div>
      );
  }
  
  export default DogList;