import { CaretLeftIcon } from "phosphor-react-native";

import { Button, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Logo } from "../Logo";

export function Header() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <CaretLeftIcon size={32} color={theme.color.WHITE} />
      </Button>
      <Logo />
    </Container>
  );
}
