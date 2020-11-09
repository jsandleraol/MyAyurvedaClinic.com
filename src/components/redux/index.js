import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducers = combineReducers({
  reducer,
});

//Array of reducers to better organize reducers

export default rootReducers;
