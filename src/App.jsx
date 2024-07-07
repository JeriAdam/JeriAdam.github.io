import Navbar from "./NavBar"
import ChatBot from "./chatbot/ChatBot"
import About from "./components/About"
import Products from "./components/Products"
import Shop from "./components/Shop"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Book from './components/Book'



function App() {
  return (
    <>
      <Navbar />
      <ChatBot />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Book" element={<Book />} />
        </Routes>
      </div>
    </>
  )
}

export default App
