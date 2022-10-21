import { useAppSelector } from "./store";

export const useDarkMode = () =>
  useAppSelector((store) => store.state.application.styles.settings.isDarkMode);
export const useHeaderSettings = () =>
  useAppSelector((store) => store.state.header.settings);
export const useHeaderMenuSettings = () =>
  useAppSelector((store) => store.state.header.menu.settings);
export const useWindowSessionsByKind = (kind: string) =>
  useAppSelector((store) =>
    Object.keys(store.state.window.sessions[kind] || {})
  );

export const useWindowSessionById = ({
  kind,
  id,
}: {
  kind: string;
  id: string;
}) => useAppSelector((store) => store.state.window.sessions[kind][id]);

export const useTerminalById = (id: string) =>
  useAppSelector((store) => store.state.terminal.sessions[id]);
