import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../Slices/Login/loginSlice'
import loginCredSlice from "../Slices/Login/loginCredSlice";

export const store = configureStore({
  reducer: {
    loginState : loginSlice,
    loginCredState: loginCredSlice,
  },
})