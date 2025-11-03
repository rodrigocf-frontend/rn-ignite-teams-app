import { UserIcon, XIcon } from "phosphor-react-native";
import { Container, Title, Button } from "./styles";
import { useTheme } from "styled-components/native";
import { Player } from "../../store/GroupsContext";

type Props = {
  data: Player;
  onRemove: () => void;
};

export function PlayerItem({ data, onRemove }: Props) {
  const theme = useTheme();
  const { name } = data;

  return (
    <Container>
      <UserIcon weight="fill" color={theme.color.GRAY_200} />
      <Title>{name}</Title>
      <Button onPress={onRemove}>
        <XIcon color={theme.color.RED_700} />
      </Button>
    </Container>
  );
}
