import { combineReducers } from "@reduxjs/toolkit";
import menu from "./menu";
import settings from "./settings";

export default combineReducers({ menu, settings });
