
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

import Sidebar from './Components/Sidebar'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'
import { useState } from 'react'

function App() {
  const [selectdTab, setselectdTab] = useState("create Post")

  return (
    
    <div className='app-container'>
      <Sidebar selectdTab = {selectdTab}></Sidebar>
      
      <div className='content'>
      <Navbar></Navbar>
      {selectdTab === "Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
      
   
      
      <Footer></Footer>
      </div>
    </div >
    
  )
}

export default App
