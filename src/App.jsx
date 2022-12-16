import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
