import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  providerName: '',
  npi: '',
  email: '',
  createdAt: '',
  activeStatus: '',
  locations: [],
};

export const doctorHomePageSlice = createSlice({
  name: 'doctorHomePage',
  initialState,
  reducers: {
    setDoctorHomePageState: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearDoctorHomePageState: () => initialState,
  },
});

export const { setDoctorHomePageState, clearDoctorHomePageState } = doctorHomePageSlice.actions;

export const selectDoctorHomePage = (state) => state.doctorHomePage;
export const selectLocations = (state) => state.doctorHomePage.locations;

export default doctorHomePageSlice.reducer;
