import { Provider } from "jotai";
import React from "react";

export const JotaiProvider = ({ children }: React.PropsWithChildren) => (
  <Provider>{children}</Provider>
);
