import { combineReducers } from "@reduxjs/toolkit";
import settings from "./settings";
import search from "./search";

export default combineReducers({ settings, search });
