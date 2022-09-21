import React,{useEffect, useState} from 'react'

const AutomaticCounter = () => {
    const initialValue=0;
    const[count,setCount]=useState(initialValue);
    useEffect(()=>{
        setCount(count+1,1000)
    })
  return (
    <div>
        <h1>Count {count}</h1>
    </div>
  )
}

export default AutomaticCounter