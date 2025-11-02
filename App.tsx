import { StatusBar } from "expo-status-bar";
import { PlayerGroups } from "./src/screens/PlayerGroups";
import { Providers } from "./src/store";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Container } from "./styles";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    ROBOTO_REGULAR: Roboto_400Regular,
    ROBOTO_BOLD: Roboto_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Providers>
      <Container>
        <PlayerGroups />
      </Container>
      <StatusBar style="auto" />
    </Providers>
  );
}
