import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../Slices/Login/loginSlice'
import loginCredSlice from "../Slices/Login/loginCredSlice";
import registerSlice  from '../Slices/Login/registerSlice';

export const store = configureStore({
  reducer: {
    loginState : loginSlice,
    loginCredState: loginCredSlice,
    registerState: registerSlice,
  },
})