import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "./store";
type Props = {};

export function KaliReactProvider({
  children,
}: PropsWithChildren<{ props: Props }>) {
  return <Provider store={store}>{children}</Provider>;
}
