import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../Slices/Login/loginSlice'

export const store = configureStore({
  reducer: {
    loginState : loginSlice
  },
})