import { v4 } from "uuid";
import store, { useAppDispatch } from "./store";

export function newWindow(id: string, kind: string, title: string) {
    store.dispatch({
        type: "window/create",
        payload: {
            id,
            kind: kind,
            title: title,
        },
    });
}
function newTerminal(id: string) {
    store.dispatch({
        type: "terminal/create",
        payload: {
            id,
        },
    });
}
export function createNewTerminal() {
    const id = v4();
    newWindow(id, "terminal", "Terminal");
    newTerminal(id);
}
