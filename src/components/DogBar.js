import React from "react";

function DogBar({pups, onSelectDog}) {

    return (
        <div id="dog-bar">
            {pups.map((pup) => (
                <span key={pup.id} onClick={() => onSelectDog(pup.id)}>{pup.name}</span> 
            ))}
        </div>
    )
}

export default DogBar;