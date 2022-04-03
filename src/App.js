import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dress from './Components/Dress/Dress';
import Shoes from './Components/Shoes/Shoes';
import Shop from './Components/Shop/Shop';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product-details/:productId' element={<ProductDetail/>}/>
        <Route path="/dress" element={<Dress/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
