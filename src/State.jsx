import {useState} from "react"
function State(){
    const [fruit,setFruit]=useState('Apple');
    const handleFruit=()=>{
        setFruit("Banana")
    }
    return <div>
    <h1>Fruit is: {fruit}</h1>
    <button onClick={handleFruit}>Click to change fruit</button>


    </div>
}

export default State