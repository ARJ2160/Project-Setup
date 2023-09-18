import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import loginReducer from "./loginSlice";
import loginSaga from "./loginSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(loginSaga);

export default store;
