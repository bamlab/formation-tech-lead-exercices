import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './reducer';
import createSagaMiddleware from 'redux-saga';
import {mainSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const createAppStore = () => {
  const store = configureStore({
    reducer: counterSlice.reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(mainSaga);
  return store;
};
