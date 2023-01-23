import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import News from "./pages/News"
import Business from "./pages/Business"
import Sports from "./pages/Sports"
import About from "./pages/About"
import Footer from "./components/Footer"
import Technology from "./pages/Technology"
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/tech" element={<Technology/>}></Route>
          <Route path="/business" element={<Business/>}></Route>
          <Route path="/sports" element={<Sports/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
