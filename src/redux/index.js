import {configureStore, createListenerMiddleware} from '@reduxjs/toolkit';
import app from './reducers/appState';
import appSlice from './reducers/appSlice';
import userSlice from './reducers/userSlice';

export const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(listenerMiddleware.middleware),
});
