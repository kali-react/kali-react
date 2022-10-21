import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
    isLocked: boolean;
    isOpen: boolean;
}

const initialState: InitialStateType = {
    isLocked: true,
    isOpen: false,
};

const slice = createSlice({
    name: "headerSettings",
    initialState,
    reducers: {
        lock: (state) => {
            state.isLocked = true;
        },
        unlock: (state) => {
            state.isLocked = false;
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
        toggle: (state) => {
            state.isLocked = !state.isLocked;
        },
    },
});

export const { lock, unlock, open, close, toggle } = slice.actions;

export default slice.reducer;
