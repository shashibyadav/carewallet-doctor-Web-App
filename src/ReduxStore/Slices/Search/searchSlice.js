import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchCriteria: {
    lastName: '',
    firstName: '',
    dateOfBirth: '',
  },
}

export const searchSlice = createSlice({
  name: 'patientSearchStore',
  initialState,
  reducers: {
    setState : (state,action) => {
      state = {
        ...action.payload
      };
    },
    setPatientCriteria: (state,action) => {
      state.searchCriteria = action.payload;
    },
  },
})

export const { setPatientCriteria,setState } = searchSlice.actions

export default searchSlice.reducer