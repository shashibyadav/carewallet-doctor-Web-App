import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginCredentials: {
    email: '',
    password: '',
  },
};

export const loginCredSlice = createSlice({
  name: 'loginCredStore',
  initialState,
  reducers: {
    setState: (state, action) => {
      Object.assign(state, action.payload);
    },
    setLoginCredentials: (state, action) => {
      state.loginCredentials = { ...action.payload };
    },
  },
});

export const { setState, setLoginCredentials } = loginCredSlice.actions;
export default loginCredSlice.reducer;
