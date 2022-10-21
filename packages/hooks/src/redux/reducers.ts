import { combineReducers } from "redux";

import header from "./slices/header";
import window from "./slices/window";
import dock from "./slices/dock";
import browser from "./slices/browser";
import desktop from "./slices/desktop";
import terminal from "./slices/terminal";
import application from "./slices/application";

import { store } from "./store";

const rootReducer = combineReducers({
  header,
  window,
  dock,
  browser,
  desktop,
  application,
  terminal,
});

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
