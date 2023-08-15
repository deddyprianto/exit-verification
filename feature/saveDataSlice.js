import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saveData: '',
};

export const counterSlice = createSlice({
  name: 'saveDataSlice',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.saveData = action.payload;
    },
  },
});
export const { setData } = counterSlice.actions;

export default counterSlice.reducer;
