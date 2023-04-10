import { Routes, Route } from 'react-router-dom';
import { StateContext } from './Context/StateContext';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import './App.css';

function App() {
  return (
    <>
    <StateContext>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="products"  element={<Products />}/>
        <Route path="product/:id"  element={<Product />}/>
      </Routes>
    </StateContext>
    </>
  );
}

export default App;
