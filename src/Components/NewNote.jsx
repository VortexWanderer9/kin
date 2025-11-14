import React, { useState } from 'react'
import NoteCard from './NoteCard'
import AllNotes from '../pages/AllNotes'

function NewNote() {
  const [visible, setVisible] = useState(false)
  const handleClick  = (e) =>{
    e.preventDefault()
    setVisible(rev => !rev)
  }
   return (
    <>
    <div className='w-full relative -top-15'>
        <div className='flex cursor-pointer hover:bg-cyan-800 gap-2 items-center justify-center absolute mt-4 right-10 py-1 px-2 rounded bg-cyan-600 text-lg text-amber-50 font-bold' onClick={handleClick}>
            <img width={20} src="../layer.svg" alt="Icon" />
            <span className=' '>New Note</span>
        </div>
    </div>
   <div> 
   {visible ?  <NoteCard /> : <AllNotes />}
   </div>
    </>
  )
}

export default NewNote