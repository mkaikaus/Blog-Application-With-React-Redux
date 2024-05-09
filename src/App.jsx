import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import PostContainer from './components/PostContainer'


function App() {
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <SideBar />
        <PostContainer />
      </section>
    </>
  )
}

export default App
