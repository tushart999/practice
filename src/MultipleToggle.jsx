import { useState } from "react"

function MultipleToggle(){
    const[count,setCount]=useState(0);
        return <div>

        <button onClick={()=>setCount(count+1)}>Increase Counter
        </button>
        {
            count==0?<h1>Count is 0</h1>
            :count==1?<h1>Count is 1</h1>
            :count==2?<h1>Count is 2</h1>
            :count==3?<h1>Count is 3</h1>
            :<h1>Galat Condition bhai</h1>
        
    }

    <h1>{count}</h1>

    </div>
}

export default MultipleToggle;