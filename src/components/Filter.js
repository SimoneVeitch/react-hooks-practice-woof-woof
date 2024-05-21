import React, {useState} from "react";

function Filter( {isOn, setIsOn}) {

    function handleFilterToggle() {
        setIsOn(!isOn);
    }

    return (
        <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilterToggle}>
                {isOn ? "Filter good dogs: ON" : "Filter good dogs: OFF" }
                </button>
      </div>
    )
}

export default Filter;