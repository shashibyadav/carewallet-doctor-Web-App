import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../Slices/Login/loginSlice'
import loginCredSlice from "../Slices/Login/loginCredSlice";
import providerRegistrationSlice from '../Slices/ProviderRegistration/providerRegistrationSlice';
import providerWorkInfoSlice from '../Slices/ProviderWorkInfo/providerWorkInfoSlice';
import multiStepSlice from '../Slices/MultiStepProviderRegistration/multiStepSlice';

export const store = configureStore({
  reducer: {
    loginState : loginSlice,
    loginCredState: loginCredSlice,
    providerRegistrationState: providerRegistrationSlice,
    providerWorkInfoState: providerWorkInfoSlice,
    multiStepState: multiStepSlice,
  },
})