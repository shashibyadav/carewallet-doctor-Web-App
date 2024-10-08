import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registerCredentials: {
    providerName: '',
    npi: '',
    email: '',
    password: '',
  },
};

export const registerSlice = createSlice({
  name: 'registerStore',
  initialState,
  reducers: {
    setProviderName: (state, action) => {
      state.registerCredentials.providerName = action.payload;
    },
    setNPI: (state, action) => {
      state.registerCredentials.npi = action.payload;
    },
    setEmail: (state, action) => {
      state.registerCredentials.email = action.payload;
    },
    setPassword: (state, action) => {
      state.registerCredentials.password = action.payload;
    },
    clearRegisterState: (state) => {
      state.registerCredentials = initialState.registerCredentials;
    },
    setRegisterCredentials: (state, action) => {
      state.registerCredentials = action.payload;
    },
  },
});

export const { setProviderName, setNPI, setEmail, setPassword, clearRegisterState, setRegisterCredentials } = registerSlice.actions;
export default registerSlice.reducer;
