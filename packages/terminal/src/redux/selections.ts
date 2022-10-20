import { useAppSelector } from "./store";

export const useTerminalById = (id: string) =>
    useAppSelector((store) => store.state.terminal.sessions[id]);

