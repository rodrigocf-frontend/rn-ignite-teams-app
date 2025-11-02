import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../themes";

export function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
