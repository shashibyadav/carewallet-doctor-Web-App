import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locationName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  locations: [],  // Store added locations here
};

export const locationsSlice = createSlice({
  name: 'locationsStore',
  initialState,
  reducers: {
    setLocationName: (state, action) => {
      state.locationName = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setStateName: (state, action) => {
      state.state = action.payload;
    },
    setZip: (state, action) => {
      state.zip = action.payload;
    },
    addLocation: (state) => {
      // Push the current state as a new location
      state.locations.push({
        locationName: state.locationName,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
      });

      // Optionally, clear the input fields after adding
      state.locationName = '';
      state.address = '';
      state.city = '';
      state.state = '';
      state.zip = '';
    },
    clearLocations: (state) => {
      state.locations = [];
    },
  },
});

export const { setLocationName, setAddress, setCity, setStateName, setZip, addLocation, clearLocations } = locationsSlice.actions;
export default locationsSlice.reducer;
