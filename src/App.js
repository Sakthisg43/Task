import './App.css';
import { Routes,Route } from 'react-router';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Count from './components/Counter';
import Message from './components/message';
import Clicking from './components/FunctionClick';
import NavBar from './NavBar';
import Home from './components/home';
import About from './components/about';
import OrderDetails from './components/OrderDetails';
import Product from './Product';
import FeatureProduct from './FeatureProduct';
import NewProduct from './NewProduct';
import Forms from './Forms';
import HooksArray from './HooksArray';
import Counter from './UseEffect';
import Post from './Post';
import Focus from './Focus';
import HookMouse from './HookMouse';
import NoMatch from './components/NoMatch';
import HooksCounter from './HooksCounter'; 
import MouseContainer from './MouseContainer';
import AutomaticCounter from './AutomaticCounter';



function App() {
  return (
  //   <>
  //   <div className="App">
  //       <Greet name="Sakthi Ganesh">
  //           <p> Welcome To our Project </p> 
  //           <button>Thank You</button>
  //       </Greet>
  //   </div>
  //     <Count />
  //  <Message />
  //  <Clicking />
  // <Routes>
  //   <Route path="/" element={<Home/>}></Route>
  //   <Route path="/About" element={<About/>}></Route>
  // </Routes>
  // <HooksCounter />
  // <>
  // <NavBar/>
  // <Routes>
  //   <Route path='/' element={<Home />} />
  //   <Route path='about' element={<About />} />
  //   <Route path='order-details' element={<OrderDetails />} />
  //   <Route path='products' element={<Product />}>
  //     <Route path='feature' element={<FeatureProduct />} />
  //     <Route path='new' element={<NewProduct/>} />
  //   </Route>
  //   <Route path='*' element={<NoMatch />} />

    


  // </Routes>
  // </>


  //   <Forms/>
  //   <HooksArray/>
  //   <Counter/>
  //   <Post/>
  //   <Focus/>
  //   <HookMouse/>
   // <MouseContainer/>
   <AutomaticCounter/>
  )
}

export default App;
