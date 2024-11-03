import './App.css'
import Home from './component/Home'
import BlogDetail from './component/BlogDetail'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'


function App() {
  
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
