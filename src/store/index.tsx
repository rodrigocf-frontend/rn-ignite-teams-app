import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../themes";
import { GroupsProvider } from "./GroupsContext";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GroupsProvider>{children}</GroupsProvider>
    </ThemeProvider>
  );
}
