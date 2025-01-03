import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastName: '',
  firstName: '',
  phoneNumber: '',
  dateOfBirth: '',
};

export const patientSearchSlice = createSlice({
  name: 'patientSearch',
  initialState,
  reducers: {
    setSearchCriteria: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearSearchCriteria: (state) => {
      state.lastName = '';
      state.firstName = '';
      state.phoneNumber = '';
      state.dateOfBirth = '';
    },
  },
});

export const { setSearchCriteria, clearSearchCriteria } = patientSearchSlice.actions;

export const selectPatientSearch = (state) => state.patientSearchState;

export default patientSearchSlice.reducer;
