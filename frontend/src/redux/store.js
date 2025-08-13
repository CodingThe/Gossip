import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slice/auth.slice';
import rootSaga from './rootsaga.js';
import createSagamiddleware from "redux-saga"
const sagaMiddleware = createSagamiddleware();
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
