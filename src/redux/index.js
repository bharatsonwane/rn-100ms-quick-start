import {configureStore, createListenerMiddleware} from '@reduxjs/toolkit';
import app from './reducers/appState';
import user from './reducers/userState';
import userSlice from './reducers/userSlice';

export const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    app: app,
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(listenerMiddleware.middleware),
});
