import './App.css'
import Home from './component/Home'
import BlogDetail from './component/BlogDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
