import { CaretLeftIcon } from "phosphor-react-native";

import { Button, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Image, StatusBar } from "react-native";

export function Header() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <CaretLeftIcon size={32} color={theme.color.WHITE} />
      </Button>
      <Image source={require("../../../assets/logo.png")} />
    </Container>
  );
}
