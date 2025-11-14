    import { createSlice, nanoid } from "@reduxjs/toolkit";

    const initialState = {
        notes: [
          { id: 1, heading: "make coffee", body: 'learn how to make coffee with in a month' }
        ]
      }
      
    const TasksSlice = createSlice({
       name: 'notes',
       initialState,
       reducers: {
        addNotes: (state, action) =>{
           const addNote = {
            id: nanoid(),
            heading: action.payload.heading,
            body: action.payload.body
           } 
           state.notes.push(addNote)
        },
        removeNote: (state, action) =>{
        state.notes = state.notes.filter((item) => item.id !== action.payload)
        }
       }
    })

    export const {addNotes, removeNote } = TasksSlice.actions
    export default TasksSlice.reducer