import React,{useEffect,useRef} from 'react'

const Focus=() =>{
    const inputRef=useRef(1);

    useEffect(()=>{
        inputRef.current.focus();
    })

  return (
    <div>
        <input ref={inputRef} type="text"/>
    </div>
  )
}

export default Focus