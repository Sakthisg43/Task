import React from 'react'
import {Link,Outlet} from 'react-router-dom'

 const Product = () => {
  return (
    <>
    <div>
        <input type="text" placeholder='Search'/>
        </div>
        <nav className='Child'> 
            <Link to='feature'>feature</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet/>
        </>
    
  )
}

export default Product;