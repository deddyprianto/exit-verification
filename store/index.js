import saveDataSlice from '@/feature/saveDataSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    saveDataSlice: saveDataSlice,
  },
});
