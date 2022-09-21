import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderDetails=()=>{
    const navigate=useNavigate();
  return (
    <>
    <div>Order Placed</div>
    <button onClick={()=>navigate('/')}>Back</button>
    </>
  )
}
export default OrderDetails;