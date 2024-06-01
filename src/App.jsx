import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/productDetails/ProductDetails'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'

function App() { 

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/productDetails/:id' element = {<ProductDetails />} />
        <Route path='/cart' element = {<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
