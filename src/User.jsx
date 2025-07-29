function User(){
    return <div>
        <h1>Hello User</h1>
        <Newcomponent /> 
    </div>//here we have called the newcomponent
}

export function Newcomponent(){ //here we have created a NewComponent
    //in the same file...
    return(
        <div>
            New component is here
        </div>
    )
}


export default User;