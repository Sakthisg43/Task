import React, { useEffect, useState } from 'react'

const Counter=() =>{
    const[count,setCount]=useState(0);
    const[name,setName]=useState([]);
    useEffect(()=>{
        console.log("useEffect updated");
        document.title=`You Clicked ${count} times `
    },[count])
    const updateCount=()=>{
        setCount(count+1);
    }
    return <div>
        <input 
        onChange={e=>setName(e.target.value)}
        type="text" placeholder='enter'/>
   <button onClick={updateCount}>Click {count} times</button>
  </div>
  
}

export default Counter;