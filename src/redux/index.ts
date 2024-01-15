import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // Import the composeWithDevTools function
import rootReducer from './reducers/index';

// Create a middleware
const middleware = [];

// Create the store with the rootReducer, middleware, and DevTools extension
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;