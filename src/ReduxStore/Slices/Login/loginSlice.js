import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchCriteria: {
    lastName: '',
    firstName: '',
    phoneNumber: '',
    dateOfBirth: '',
  },
}

export const loginSlice = createSlice({
  name: 'loginStore',
  initialState,
  reducers: {
    setState : (state,action) => {
      state = {
        ...action.payload
      };
    },
    setPatientSearchCriteria: (state,action) => {
      state.searchCriteria = action.payload;
    },
  },
})

export const { setPatientSearchCriteria,setState } = loginSlice.actions

export default loginSlice.reducer