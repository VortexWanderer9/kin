import { configureStore } from "@reduxjs/toolkit";
import notesReducer from '../features/notes'

export const store = configureStore({
reducer: notesReducer
})