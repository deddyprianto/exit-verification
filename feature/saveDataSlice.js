import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  dataScan: {},
  dataInput: {},
  isLoading: false,
  isErrorScan: false,
  valueScnanner: '',
  bagItem: [],
  verifyItem: { showPopup: false },
  isRefreshPage: false,
};
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
    setBagItem: (state, action) => {
      state.bagItem = action.payload;
    },
    setVerifyItems: (state, action) => {
      state.verifyItem = action.payload;
    },
    setIsRefreshPage: (state, action) => {
      state.isRefreshPage = action.payload;
    },
  },
});
export const {
  setDataScanner,
  setIsLoading,
  setIsErrorScan,
  setDataInput,
  setValueScanner,
  setBagItem,
  setVerifyItems,
  setIsRefreshPage,
} = counterSlice.actions;

export default counterSlice.reducer;
