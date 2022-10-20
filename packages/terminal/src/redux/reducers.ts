import { combineReducers } from "redux";
import terminal from "./terminal";

import { store } from "./store";

const rootReducer = combineReducers({
  terminal,
});

export default rootReducer;
