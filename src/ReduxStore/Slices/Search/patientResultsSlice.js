import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  patients: [],
  isLoading: false,
  error: null,
};

export const patientResultsSlice = createSlice({
  name: 'patientResults',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPatients: (state, action) => {
      state.patients = action.payload || [];
    },
    clearResults: (state) => {
      state.patients = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { setLoading, setError, setPatients, clearResults } = patientResultsSlice.actions;

export const selectPatients = (state) => state.patientResultsState.patients;
export const selectIsLoading = (state) => state.patientResultsState.isLoading;
export const selectError = (state) => state.patientResultsState.error;

export default patientResultsSlice.reducer;
