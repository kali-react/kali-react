import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
    value: string;
}

const initialState: InitialStateType = {
    value: "",
};

const slice = createSlice({
    name: "headerMenuSearch",
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
        clearValue: (state) => {
            state.value = "";
        },
    },
});

export const { setValue, clearValue } = slice.actions;

export default slice.reducer;
