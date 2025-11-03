import { UsersThreeIcon } from "phosphor-react-native";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components/native";
import { Group } from "../../store/GroupsContext";

interface Props {
  data: Group;
}

export function GroupItem({ data }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <UsersThreeIcon size={31} weight="fill" color={theme.color.GREEN_500} />
      <Title>{data.name}</Title>
    </Container>
  );
}
