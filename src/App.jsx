import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import ProductDetails from './pages/productDetails/ProductDetails'
import Navbar from './components/navbar/Navbar'

function App() { 

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path="/product/:productId" element = {<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
