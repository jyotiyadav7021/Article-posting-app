
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Core from '././Components/Core'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    
    <div className='app-container'>
      <Sidebar></Sidebar>
      
      <div className='content'>
      <Navbar></Navbar>
   
      <Core></Core>
      <Footer></Footer>
      </div>
    </div >
    
  )
}

export default App
