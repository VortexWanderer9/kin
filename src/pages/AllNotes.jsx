import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeNote } from '../features/notes'

function AllNotes() {
    let selector = useSelector((state) => state.notes)
    const dispatch = useDispatch()
    const handelClick  = (id) =>{
      dispatch(removeNote(id))
    }

useEffect(() => {
  if(selector && selector.length > 0){
    localStorage.setItem("task", JSON.stringify(selector));
  } else {
    localStorage.clear()
  }
  
}, [selector]);


  return (
    <>
   <div className='grid gap-3 p-2 max-w-full lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-1'>
   {selector.map((item) => (
    <div key={item.id} className='bg-fuchsia-600 p-2 sm:w-full flex flex-col justify-beside h-100 overflow-y-auto rounded relative'> 
    <div> 
        <h2 className='text-center font-bold text-indigo-800 border-b p-2'>{item.heading}</h2>
    </div>
    <div>
        <h2 className='mt-2 font-lg font-bold text-start text-balance'>{item.body}</h2>
    </div>
    <div 
    className='absolute top-1 right-1 rounded cursor-pointer hover:bg-white/20 p-1 ' 
    onClick={() =>  handelClick(item.id)}
    >
        <img width={20} src="../tras.svg" alt="Trash" />
    </div>
</div>
   ))}
   </div>
    </>
  )
}

export default AllNotes