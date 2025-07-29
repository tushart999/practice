import React from "react"
function User1({loop}){
    return <div style={{color:"green", border:"5px solid black", borderRadius:"10px"}}>
        <h1>Name:{loop.name}</h1>
        <h1>Id:{loop.id}</h1>
        <h1>Age:{loop.age}</h1>
        <h1>Email:{loop.email}</h1>
    </div>
}

export default User1