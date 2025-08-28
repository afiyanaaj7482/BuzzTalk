import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/user/user.slice"

//reducer ko store me lgana h
export const store = configureStore({
  reducer: {
    userReducer
  },
  
})

