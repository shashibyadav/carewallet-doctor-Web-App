import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchCriteria: {
    phoneNumber:'',
    email:'',
    lastName: '',
    firstName: '',
    address:'',
    city:'',
    state:'',
    zipcode:'',
    insuranceName:'',
    policyHName:'',
    policyNumber:'',
    groupNumber:'',
    policyHDOB:'',
    dateOfBirth: '',
  },
}

export const patientSlice = createSlice({
  name: 'patientStore',
  initialState,
  reducers: {
    setState : (state,action) => {
      state = {
        ...action.payload
      };
    },
    setPatientDataCriteria: (state,action) => {
      state.searchCriteria = action.payload;
    },
  },
})

export const { setPatientDataCriteria,setState } = patientSlice.actions

export default patientSlice.reducer