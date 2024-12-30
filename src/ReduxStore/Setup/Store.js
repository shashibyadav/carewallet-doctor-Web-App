import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../Slices/Login/loginSlice'
import loginCredSlice from "../Slices/Login/loginCredSlice";
import registerSlice  from '../Slices/Login/registerSlice';
import locationsSlice from '../Slices/Login/locationSlice';
import homePageSlice from '../Slices/Login/homePageSlice';
import  patientSearchSlice  from '../Slices/Search/patientSearchSlice';
import  patientResultsSlice  from '../Slices/Search/patientResultsSlice';
export const store = configureStore({
  reducer: {
    loginState : loginSlice,
    loginCredState: loginCredSlice,
    registerState: registerSlice,
    locationsState: locationsSlice,
    homeState: homePageSlice,
    patientSearchState: patientSearchSlice,
    patientResultsState: patientResultsSlice,
  },
})