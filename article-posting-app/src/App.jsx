
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

import Sidebar from './Components/Sidebar'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'

function App() {

  return (
    
    <div className='app-container'>
      <Sidebar></Sidebar>
      
      <div className='content'>
      <Navbar></Navbar>
      <CreatePost></CreatePost>
   
      <PostList></PostList>
      <Footer></Footer>
      </div>
    </div >
    
  )
}

export default App
