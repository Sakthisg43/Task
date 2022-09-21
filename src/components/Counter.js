import React,{useState} from "react";

const Count=()=>
{

    const[count,setCount]=useState(0);

    const addValue=(prevState)=>{
        setCount(count+5);
    }
    return <div>
            <h3>Count-{count}</h3>
            <button onClick={addValue}>Add</button>
        </div>
    
}

export default Count; 