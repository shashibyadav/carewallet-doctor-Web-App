import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workInformation: {
    primaryFacility: '',
    secondaryFacility: '',
    additionalFacilities: [],
    noSecondaryFacility: false
  },
};

export const providerWorkInfoSlice = createSlice({
  name: "providerWorkInfo",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.workInformation = action.payload;
    },
  },
});

export const { updateFormData } = providerWorkInfoSlice.actions;

export default providerWorkInfoSlice.reducer;
