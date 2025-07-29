import { useState } from "react";
function Counter(){
    const[count,setCount]=useState(0);
    const[rcounter,setrCounter]=useState(10);


    return <div>
        <h1>counter is: {count}</h1>
        {/* <h1>r counter is: {rcounter}</h1> */}
        <button onClick={()=>setCount(count+1)}>increase counter</button>
        <button onClick={()=>setCount(count-1)}>decrease counter</button>
    </div>
}

export default Counter;