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
<div className="grid gap-5 p-4 max-w-full 
  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

  {selector.map((item) => (
    <div
      key={item.id}
      className="
        bg-white
        rounded-xl 
        shadow-sm 
        hover:shadow-md 
        transition-all 
        duration-300 
        border 
        border-gray-100
        p-5 
        relative 
        flex 
        flex-col 
        h-auto
      "
    >
      {/* Delete Button */}
      <button
        onClick={() => handelClick(item.id)}
        className="
          absolute top-3 right-3
          p-2
          rounded-full
          hover:bg-gray-100
          transition
          active:scale-95
          cursor-pointer
        "
      >
        <img width={20} src="../tras.svg" alt="Trash" />
      </button>

      {/* Heading */}
      <h2 className="
        text-lg 
        font-semibold 
        mb-3 
        pr-8 
        break-words
        border-b 
        text-center
        text-cyan-600
      ">
        {item.heading}
      </h2>

      {/* Body */}
      <p className="
        text-gray-600 
        text-sm 
        leading-relaxed 
        whitespace-pre-wrap 
        break-words
      ">
        {item.body}
      </p>

    </div>
  ))}
</div>


    </>
  )
}

export default AllNotes