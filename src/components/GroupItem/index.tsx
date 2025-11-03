import { UsersThreeIcon } from "phosphor-react-native";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components/native";
import { Group } from "../../store/GroupsContext";
import { useNavigation } from "@react-navigation/native";

interface Props {
  data: Group;
}

export function GroupItem({ data }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("Group", { id: data.id })}>
      <UsersThreeIcon size={31} weight="fill" color={theme.color.GREEN_500} />
      <Title>{data.name}</Title>
    </Container>
  );
}
