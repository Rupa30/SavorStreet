import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import Successful from "./pages/Successful/Successful"


function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <div className="app">
        {showLogin? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder/>} />
          <Route path="/successful" element={<Successful/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
