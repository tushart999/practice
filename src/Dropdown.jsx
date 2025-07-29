import { useState } from "react"
import React from "react";
import Clock from "./Clock";

function Dropdown(){

    const [color,setColor]=useState("Blue")
    const handleColor = (event) => {
    setColor(event.target.value);
};

    return (
        <div>
            <select value={color} onChange={handleColor}>
                <option value="blue"  >blue</option>
                <option value="green"  >green</option>
                <option value="red"  >Red</option>
                <option value="yellow"  >Yellow</option>
                <option value="purple"  >Purple</option>
                <option value="orange"  >Orange</option>
            </select>

            <Clock colour={color}/>


        </div>
    )
}



export default Dropdown