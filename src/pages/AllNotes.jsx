import React from 'react'
import { useSelector } from 'react-redux'

function AllNotes() {
    const selector = useSelector((state) => state.notes)
    console.log(selector);
    
  return (
    <>
   <div className='grid gap-3 p-4 justify-center lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-1'>
   {selector.map((item) => (
    <div key={item.id} className='bg-fuchsia-600 p-2 flex flex-col justify-beside h-100 overflow-y-auto rounded relative'> 
    <div> 
        <h2 className='text-center font-bold text-indigo-800 border-b p-2'>{item.heading}</h2>
    </div>
    <div>
        <h2 className='mt-2 font-lg font-bold text-start text-balance'>{item.body}</h2>
    </div>
    <div className='absolute top-1 right-1 rounded cursor-pointer hover:bg-white/20 p-1 ' >
        <img width={20} src="../tras.svg" alt="Trash" />
    </div>
</div>
   ))}
   </div>
    </>
  )
}

export default AllNotes