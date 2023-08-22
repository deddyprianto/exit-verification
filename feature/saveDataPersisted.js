import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  refNo: '',
};

const dataPersistedSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    setRefNo: (state, action) => {
      state.refNo = action.payload;
    },
  },
});

export const { setRefNo } = dataPersistedSlice.actions;
export default dataPersistedSlice.reducer;
