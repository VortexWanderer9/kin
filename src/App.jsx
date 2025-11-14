import gsap from 'gsap'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllNotes from './pages/AllNotes'
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="min-h-screen w-full bg-[#020617] fixed overflow-auto">
  {/* Dark Radial Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
    }}
  />
  <div>
   <div className='absolute w-full'>
<div>
<NavBar />
</div>
   <div>
   <Routes>
      <Route path='/' element ={<Home />}/>
      <Route path='/notes' element ={<AllNotes />}/>
    </Routes>
   </div>
   </div>
  </div>
   
</div>
      
    </BrowserRouter>
    
      
    </>
  )
}

export default App
