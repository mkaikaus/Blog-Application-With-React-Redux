import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './components/Post'


function App() {
  return (
    <>
      <Router>


        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Post />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
