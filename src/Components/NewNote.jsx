import React from 'react'

function NewNote() {
  return (
    <>
    <div className='w-full relative'>
        <div className='flex cursor-pointer hover:bg-cyan-800 gap-2 items-center justify-center absolute mt-4 right-10 py-1 px-2 rounded bg-cyan-600 text-lg text-amber-50 font-bold'>
            <img width={20} src="../layer.svg" alt="Icon" />
            <span className=' '>New Note</span>
            
        </div>
    </div>
    \
    </>
  )
}

export default NewNote