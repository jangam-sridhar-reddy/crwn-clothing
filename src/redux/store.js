import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
import rootReducer from "./root-reducer/root-reducer";

import createSagasMiddleWare from "redux-saga";
import rootSaga from "./root-sagas/root-sagas";

const sagasMiddleWare = createSagasMiddleWare();

const middlewares = [sagasMiddleWare];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagasMiddleWare.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
