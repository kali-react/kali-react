import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
    isOpen: boolean;
}

const initialState: InitialStateType = {
    isOpen: false,
};

const slice = createSlice({
    name: "headerMenuSettings",
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { open, close, toggle } = slice.actions;

export default slice.reducer;
