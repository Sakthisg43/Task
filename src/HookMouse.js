import React,{useState,useEffect} from 'react'

const HookMouse=()=> {

    const[x,setX]=useState(0);

    const[y,setY]=useState(0);
    const movementTrack=(e)=>{
   
         setX(e.clientX);
         setY(e.clientY);

    }
    useEffect(()=>{
       
        window.addEventListener('mousemove',movementTrack);
    })

  return (
    <div>HookMouse  X:={x} Y:={y}</div>
  )
}

export default HookMouse;