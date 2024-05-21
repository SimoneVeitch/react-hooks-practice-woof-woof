import React, {useState, useEffect} from "react";

function DogCard({id, name, isGoodDog, image}) {
    const [isGood, setIsGood] = useState(isGoodDog)

    function handleToggle() {
        setIsGood(!isGood);

        fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isGoodDog: !isGood }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update dog's status");
        }
    })
    .catch((error) => {
      console.error("Error updating dog's status:", error);
      // Revert the local state if the update fails
      setIsGood(isGood); // Revert to the original state
    });
}
     
    return (
        <div id="dog-info">
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <button onClick={handleToggle}>
                {isGood ? "Good Dog!" : "Bad Dog!" }
            </button>
        </div>
    )
}

export default DogCard;