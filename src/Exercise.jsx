function Exercise(){
    
    return <div>
        <h1>Hello guys from Exercise</h1>
        <button onClick={()=> 
            alert("Function called")}>
            Click me</button>
    </div>
}

function sum(a,b){
    return a+b;
}

const user="Tushar"

function fruitss(name){
    alert(name);
}

export function Second(){
    const x=0;
    const y=1;
//     // function fruitss(name){
//     // alert('name');
// }
    return <div>
        <button onClick={()=>fruitss('apple')}>Apple</button>
        <button onClick={()=>fruitss('banana')}>Banana</button>
        <h1>{x+y}</h1>
        <h1>{sum(10,20)}</h1>
        <h1>{user?user:"user not found"}</h1>
    </div>
}

export default Exercise;