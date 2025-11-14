import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../features/notes";

const NoteCard = () =>{
    const [heading, setHeading] = useState("")
  const [body, setBody] = useState("")
  const dispatch = useDispatch()
  const clickHandel = () =>{
   if(!heading && !body){
return
   } else {
    dispatch(addNotes(
        { heading,
         body
         }
        ))
        setBody("")
        setHeading("")
   }
  
  }
    return (
        <div className="w-full flex relative justify-center">
        <div className='absolute border border-black bg-black/20 p-5 mt-5 rounded flex flex-col gap-4'>
          <div className='flex justify-between font-bold text-lg'>
          <h2>New Note</h2>
          <h2>X</h2>
          </div>
          <div>
        <input type="text" className='border outline-none py-1 px-2' value={heading} onChange={(e) => setHeading(e.target.value)} placeholder='Enter Note Heading' required/>
        <h2 className='mt-3 font-bold font-mono'>Note: </h2>
        <textarea
         className='border-2 outline-none p-2 bg-black/10 rounded '
          name="note"
           id="note"
           value={body}
           onChange={(e) => setBody(e.target.value)} >
           </textarea>
          </div>
          <button  
          className='bg-white/20 hover:bg-white/10 cursor-pointer rounded p-1 text-xl font-bold'
          onClick={clickHandel}
          >
            Add Note
             </button>
        </div>
        </div>
    )
}

export default NoteCard