import { useState } from "react"

function Task1(){
    const [val1,setVal1]=useState("")
    const [val2,setVal2]=useState("")
    const [val3,setVal3]=useState("")
      const [showValues, setShowValues] = useState(false);

    return (
        <div>
            <input type="text" 
            placeholder="Enter name"
             value={val1} 
            onChange={(event)=>setVal1(event.target.value)}>

            </input>
            <input type="text" placeholder="Enter age" value={val2}
            onChange={(event)=>setVal2(event.target.value)}
            ></input>
            <input type="text" placeholder="Enter email" value={val3}
            onChange={(event)=>setVal3(event.target.value)}></input>

            <button onClick={()=>{setVal1("");setVal2("");setVal3("");setShowValues(false)}}>
                Clear all
            </button>

             <button onClick={() => setShowValues(true)}>Show values</button>
 {
        showValues
          ? <div>
              <h1>name: {val1}</h1>
              <h1>age: {val2}</h1>
              <h1>email: {val3}</h1>
            </div>
          : null
      }
        </div>
    )
}

export default Task1