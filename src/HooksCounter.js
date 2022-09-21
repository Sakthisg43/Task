import React,{useState} from 'react'

function HooksCounter(){
    const initialValue=0;
    const[count,setCount]=useState(initialValue);
    function IncrementFive(){
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount+1);
        }
    }
  return (
    <div>
        Count:{count};
        <button onClick={()=>setCount(count+1)}>Add</button>
        <button onClick={()=>setCount(count-1)}>Delete</button>
        <button onClick={()=>setCount(initialValue)}>Reset</button>
        <button onClick={IncrementFive}>Increment5</button>
    </div>
  )
}

export default HooksCounter;