import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registrationForm: {
    title: "",
    firstName: "",
    lastName: "",
    npi: "",
    primaryPhone: "",
    secondaryPhone: "",
    primaryEmail: "",
    secondaryEmail: "",
    password: "",
    confirmPassword: "",
    personalAddress: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    noSecondaryPhone: false,
  },
};

export const providerRegistrationSlice = createSlice({
  name: "providerRegistration",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.registrationForm = action.payload;
    },
  },
});

export const { updateFormData } = providerRegistrationSlice.actions;

export default providerRegistrationSlice.reducer;
