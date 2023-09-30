
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='home' element={<Home></Home>}></Route>
     <Route path='/' element={<Home></Home>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
