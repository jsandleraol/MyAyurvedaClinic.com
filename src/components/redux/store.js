// import { createStore, applyMiddleware } from "redux";
import { createStore} from "redux";
// import logger from "redux-logger";

// import rootReducers from "./index";
//2nd level of reducer to improve organization
import rootReducers from "./reducer";

// const preloadedState = {};
// const middlewares = [];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

const store = createStore(
  rootReducers,
  // preloadedState,
  // applyMiddleware(...middlewares)
);

export default store;
