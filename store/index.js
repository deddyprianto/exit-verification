import saveDataSlice from '@/feature/saveDataSlice';
import saveDataPersisted from '@/feature/saveDataPersisted';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, saveDataPersisted);

export const store = configureStore({
  reducer: {
    dataPersist: persistedReducer,
    dataUser: saveDataSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
export const persistor = persistStore(store);