
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Products from './Pages/Products/Products';
import Login from './Pages/Singin/Login/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
