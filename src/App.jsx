import './App.scss';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart'
import CartContextProvider from './components/CartContext';
import Index from './components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import CrearProductos from './components/crearproducto/CrearProductos';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
    <section>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/clase/:idClase' element={<ItemListContainer/>}/>
      <Route path='/category/:idCat' element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/atr' element={<CrearProductos/>}/>
    </Routes>
    </section>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
