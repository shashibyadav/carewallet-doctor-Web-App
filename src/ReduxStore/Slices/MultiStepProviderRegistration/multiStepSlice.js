import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step: 1,
}

export const multiStepSlice = createSlice({
    name: 'multiStep',
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload;
        },
    }
});

export const { setStep } = multiStepSlice.actions;

export default multiStepSlice.reducer;