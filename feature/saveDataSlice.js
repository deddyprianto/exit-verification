import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saveData: '',
  isLoading: false,
  isValidQrCode: false,
};

export const counterSlice = createSlice({
  name: 'saveDataSlice',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.saveData = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsValidQrCode: (state, action) => {
      state.isValidQrCode = action.payload;
    },
  },
});
export const { setData, setIsLoading, setIsValidQrCode } = counterSlice.actions;

export default counterSlice.reducer;
