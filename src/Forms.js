import React,{useState} from 'react'

 const Forms = () => {

    const[value,setValue]=useState({firstname: '',lastname:''});
  return (
    <>
  <form>
      
      <input 
      
      type="text" placeholder='Enter your 1stName'
      value={value.firstname}
      onChange={e=>setValue({...value,firstname:e.target.value})}

      />
     
     <input 
      
      type="text" placeholder='Enter your 2ndName'
      value={value.lastname}
      onChange={e=>setValue({...value,lastname:e.target.value})}/>
      </form>
      <h1>The firstname is {value.firstname}</h1>
      <h1>The lastname is {value.lastname}</h1>
      <h1>{JSON.stringify(value)}</h1>
      </>
  )
}
export default Forms;
