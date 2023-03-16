import { configureStore } from '@reduxjs/toolkit';
// import phoneBookReducer from './phoneBook/phoneBookReducer';

import { phoneBookReducer } from './slice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
});
