import React,{useState} from 'react'

const Post=() =>{
    const[data,setData]=useState('');
    const[month,setMonth]=useState(';')

    const submit=(e)=>{
       
    }
  return (
    <div>
        <form onSubmit={(e)=>submit(e)}>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
            <input type="date" value={month} onChange={(e)=>setMonth(e.target.value)}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Post