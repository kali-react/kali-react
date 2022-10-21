import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
    count: number;
}

const initialState: InitialStateType = {
    count: 20,
};

const slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.count++;
        },
        decrease: (state) => {
            state.count--;
        },
    },
});

export const { increase, decrease } = slice.actions;

export default slice.reducer;
