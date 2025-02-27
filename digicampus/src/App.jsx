import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/common_pages/Homepage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Pagenotfound from './pages/common_pages/Pagenotfound'
import Header from './components/common_components/Header'
import Footer from './components/common_components/Footer'
import Register from './pages/common_pages/Register'
import Contact from './pages/common_pages/Contact'
import Signup from './pages/common_pages/Signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes> 
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>
        <Route path="/pagenotfound" element={<Pagenotfound/>}></Route>
        <Route path="/*" element={<Pagenotfound/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
