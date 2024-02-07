import "./App.css"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./Pages/Shop.jsx"
import ShopCategory from "./Pages/ShopCategory.jsx"
import Product from "./Pages/Product.jsx"
import Cart from "./Pages/Cart.jsx"
import LoginSignUp from "./Pages/LoginSignUp.jsx"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/" element={<Shop />} />
          <Route path="/dogs" element={<ShopCategory category="dogs" />} />
          <Route path="/cats" element={<ShopCategory category="cats" />} />
          <Route path="/others" element={<ShopCategory category="others" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
