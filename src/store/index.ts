//Core
import {configureStore} from '@reduxjs/toolkit';

// RootReducer
import rootReducer from '../bus/index';

const store = configureStore({
  reducer: rootReducer
})

// Exports
export type RootReducer = ReturnType<typeof store.getState>
export default store;
