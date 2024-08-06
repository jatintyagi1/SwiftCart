import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../feautures/auth/authSlice';
import loginReducer from '../feautures/auth/loginSlice'


export const store = configureStore({
    reducer: {
      auth: authReducer,
      login: loginReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

