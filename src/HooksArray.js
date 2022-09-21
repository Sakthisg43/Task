import React,{useState} from 'react'

function HooksArray() {
     const[data,setData]=useState([]);

     const addItem=()=>{
        setData([...data,{
            id:data.length,
            value:Math.floor(Math.random()*10)
        }])
     }
  return (
      <>
         <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {data.map((values)=>(
                    <li key={values.id} >{values.value}</li>
                )
    
                )}
            </ul>
         </div>
      </>

  )
}

export default HooksArray