import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  providerName: '',
  npi: '',
  email: '',
  createdAt: '',
  activeStatus: '',
  locations: [],
  activeLocation: null, 
};

export const homePageSlice = createSlice({
  name: 'homePageStore',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.providerName = action.payload.providerName || '';
      state.npi = action.payload.npi || '';
      state.email = action.payload.email || '';
      state.createdAt = action.payload.createdAt || '';
      state.activeStatus = action.payload.activeStatus || '';
      state.locations = action.payload.locations || [];
    },
    clearState: (state) => {
      state.providerName = '';
      state.npi = '';
      state.email = '';
      state.createdAt = '';
      state.activeStatus = '';
      state.locations = [];
      state.activeLocation = null;
    },
    setActiveLocation: (state, action) => {
      state.activeLocation = action.payload;
    },
  },
});

export const { setState, clearState, setActiveLocation } = homePageSlice.actions;

export const selectProviderName = (state) => state.homeState.providerName;
export const selectNpi = (state) => state.homeState.npi;
export const selectEmail = (state) => state.homeState.email;
export const selectCreatedAt = (state) => state.homeState.createdAt;
export const selectActiveStatus = (state) => state.homeState.activeStatus;
export const selectLocations = (state) => state.homeState.locations;
export const selectActiveLocation = (state) => state.homeState.activeLocation;

export default homePageSlice.reducer;
