import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
    sessions: {
        [type: string]: {
            [id: string]: {
                id: string;
                kind: string;
                title: string;
                isExpanded: boolean;
                isMinimized: boolean;
                offset: {
                    x: number;
                    y: number;
                };
                previousOffset: {
                    x: number;
                    y: number;
                };
                zIndex: number;
                size: {
                    width: number | string;
                    height: number | string;
                };
                previousSize: {
                    width: number | string;
                    height: number | string;
                };
                isOnTop: boolean;
            };
        };
    };
    totalSessions: number;
}

const initialState: InitialStateType = {
    sessions: {},
    totalSessions: 0,
};
type a = keyof InitialStateType["sessions"];
const slice = createSlice({
    name: "window",
    initialState,
    reducers: {
        close: (state, { payload: { kind, id } }) => {
            delete state.sessions[kind][id];
            state.totalSessions -= 1;
        },
        create: (state, { payload: { id, kind, ...data } }) => {
            if (!state.sessions[kind]) state.sessions[kind] = {};
            state.sessions[kind][id] = {
                size: {
                    width: "500px",
                    height: "300px",
                },
                offset: {
                    x: 0 + state.totalSessions * 10,
                    y: 0 + state.totalSessions * 10,
                },
                ...data,
            };
            state.totalSessions++;
            slice.caseReducers.reorder(state, {
                type: "window/reorder",
                payload: {
                    id,
                    kind,
                },
            });
        },
        move: (state, { payload: { id, kind, offset } }) => {
            state.sessions[kind][id].offset = offset;
            slice.caseReducers.reorder(state, {
                type: "window/reorder",
                payload: {
                    id,
                    kind,
                },
            });
        },
        reorder: (state, { payload: { id, kind } }) => {
            for (const kind in state.sessions) {
                for (const key in state.sessions[kind]) {
                    if (
                        state.sessions[kind][key].zIndex === state.totalSessions
                    ) {
                        state.sessions[kind][key].zIndex -= 1;
                        state.sessions[kind][key].isOnTop = false;
                    }
                }
            }
            state.sessions[kind][id].zIndex = state.totalSessions;
            state.sessions[kind][id].isOnTop = true;
        },
        resize: (state, { payload: { id, kind, size } }) => {
            state.sessions[kind][id].size = size;
            state.sessions[kind][id].isExpanded = false;
            state.sessions[kind][id].isMinimized = false;
        },
        maximize: (state, { payload: { id, kind } }) => {
            state.sessions[kind][id].isExpanded = true;
            state.sessions[kind][id].isMinimized = false;
            state.sessions[kind][id].previousSize =
                state.sessions[kind][id].size;
            state.sessions[kind][id].previousOffset =
                state.sessions[kind][id].offset;
            state.sessions[kind][id].size = {
                width: "100%",
                height: "100%",
            };
            slice.caseReducers.move(state, {
                type: "window/move",
                payload: {
                    id,
                    offset: {
                        x: 0,
                        y: 0,
                    },
                    kind,
                },
            });
        },
        minimize: (state, { payload: { id, kind } }) => {
            state.sessions[kind][id].isExpanded = false;
            state.sessions[kind][id].isMinimized = true;
            state.sessions[kind][id].size =
                state.sessions[kind][id].previousSize;
            state.sessions[kind][id].offset =
                state.sessions[kind][id].previousOffset;
        },
    },
});

export const { move, resize, reorder, minimize, maximize, create, close } =
    slice.actions;

export default slice.reducer;
