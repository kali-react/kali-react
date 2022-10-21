import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
    isDarkMode: boolean;
}

const initialState: InitialStateType = {
    isDarkMode: true,
};

const slice = createSlice({
    name: "applicationStylesSettings",
    initialState,
    reducers: {
        setLightMode: (state) => {
            state.isDarkMode = false;
        },
        setDarkMode: (state) => {
            state.isDarkMode = true;
        },
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { setLightMode, setDarkMode, toggleTheme } = slice.actions;

export default slice.reducer;
