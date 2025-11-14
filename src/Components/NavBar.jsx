import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div className='flex justify-center font-bold text-lg mt-6'>
        <div className='flex gap-8 border-b py-2 px-4 border-b-emerald-600 '>
        <NavLink to={'/'} className={({isActive}) => isActive ? "text-cyan-500" : ""}>Home</NavLink>
        <NavLink to={'/notes'} className={({isActive}) => isActive ? "text-cyan-500" : ""}>Notes</NavLink>
        </div>
    </div>
    
</>
  )
}

export default NavBar