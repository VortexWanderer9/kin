import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../features/notes";

const NoteCard = ({setVisible}) =>{
    const [heading, setHeading] = useState("")
  const [body, setBody] = useState("")
  const dispatch = useDispatch()
        const clickHandel = () =>{
        if(!heading && !body){
            return
        } else {
            dispatch(addNotes({
              heading,
              body
              }))
              setBody("")
              setHeading("")
              close()
        }}
        const close = () =>{
          setVisible(prev => !prev)
        }
    return (
        <div className="w-full flex relative justify-center">
        <div className='absolute border border-black bg-black/20 p-5 mt-5 rounded flex flex-col gap-7'>
          <div className='flex items-center justify-between font-bold text-lg'>
          <h2>New Note</h2>
          <h2 onClick={close}>
            <img width={30} className="bg-white/10 hover:bg-white/20 cursor-pointer hover:rotate-z-45 duration-500 rounded-2xl" src="../x.svg" alt="" />
          </h2>
          </div>
          <div>
            <h2 className="font-bold font-serif text-cyan-700">Heading</h2>
        <input type="text" className='bg-fuchsia-500 text-black font-bold mt-2 outline-none rounded py-1 px-2' value={heading} onChange={(e) => setHeading(e.target.value)} placeholder='Enter Note Heading' required/>
        <h2 className='mt-3 font-bold font-mono text-cyan-800'>Note: </h2>
        <textarea
         className=' outline-none w-full px-1 py-3 h-50 bg-fuchsia-600 rounded font-semibold'
          name="note"
           id="note"
           value={body}
           onChange={(e) => setBody(e.target.value)} 
           placeholder="Add note here"
           >
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