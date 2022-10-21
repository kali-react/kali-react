import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  sessions: {
    [id: string]: {
      history: {
        command: string;
        args: string[];
        hidden: boolean;
      }[];
      path: string;
      user: string;
      group: string;
      command?: {
        command: string;
        args: string[];
      };
    };
  };
}

const initialState: InitialStateType = {
  sessions: {
    "1": {
      history: [],
      path: "/",
      user: "root",
      group: "root",
    },
  },
};

const slice = createSlice({
  name: "terminal",
  initialState,
  reducers: {
    create: (state, action) => {
      state.sessions[action.payload.id] = {
        history: [],
        path: "/",
        user: "root",
        group: "root",
      };
    },
    run: (state, { payload: { id, command, args, hidden = false } }) => {
      state.sessions[id].history.push({
        command,
        args,
        hidden,
      });
      state.sessions[id].command = {
        command,
        args,
      };
    },
    clear: (state, { payload: { id } }) => {
      state.sessions[id].history.forEach((each) => {
        each.hidden = true;
      });
    },
  },
});

export const { run, clear } = slice.actions;

export default slice.reducer;
