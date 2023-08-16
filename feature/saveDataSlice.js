import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  dataScan: {},
  dataInput: {},
  isLoading: false,
  isErrorScan: false,
  valueScnanner: '',
};
//202308100002-IHQ-A002
export const counterSlice = createSlice({
  name: 'saveDataSlice',
  initialState,
  reducers: {
    setDataScanner: (state, action) => {
      state.dataScan = action.payload;
    },
    setDataInput: (state, action) => {
      state.dataInput = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsErrorScan: (state, action) => {
      state.isErrorScan = action.payload;
    },
    setValueScanner: (state, action) => {
      state.valueScnanner = action.payload;
    },
  },
});
export const {
  setDataScanner,
  setIsLoading,
  setIsErrorScan,
  setDataInput,
  setValueScanner,
} = counterSlice.actions;

export default counterSlice.reducer;
