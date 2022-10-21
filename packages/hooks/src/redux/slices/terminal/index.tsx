import { createSlice } from "@reduxjs/toolkit";
import store, { useAppDispatch } from "../../store";



export interface InitialStateType {
  sessions: {
    [id: string]: {
      history: {
        command: string;
        args: string[];
        hidden: boolean;
      }[];
      historyIndex: number | undefined;
      path: string;
      user: string;
      group: string;
      command: string;
      args: string[];
      isTyping: boolean;
    };
  };
}

const initialState: InitialStateType = {
  sessions: {},
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
        historyIndex: undefined,
        command: "",
        args: [],
        isTyping: false,
      };
    },
    run: (state, { payload: { id, command, args, hidden = false } }) => {
      state.sessions[id].history.push({
        command,
        args,
        hidden,
      });
      state.sessions[id].command = "";
      state.sessions[id].args = [];
    },
    clear: (state, { payload: { id } }) => {
      state.sessions[id].history.forEach((each) => {
        each.hidden = true;
      });
    },
    pressUp: (state, { payload: { id } }) => {
      const session = state.sessions[id];
      if (session.historyIndex === undefined) {
        session.historyIndex = session.history.length - 1;
      } else {
        session.historyIndex = Math.max(0, session.historyIndex - 1);
      }
    },
    pressDown: (state, { payload: { id } }) => {
      const session = state.sessions[id];
      if (session.historyIndex === undefined) {
        session.historyIndex = undefined;
      } else {
        session.historyIndex = Math.min(
          session.history.length - 1,
          session.historyIndex + 1
        );
      }
    },
    type: (state, { payload: { id, value } }) => {
      if (value) {
        state.sessions[id].isTyping = true;
      } else {
        state.sessions[id].isTyping = false;
      }
      state.sessions[id].command = value;
    },
  },
});

export const { run, clear, pressUp, pressDown, type } = slice.actions;

export default slice.reducer;
