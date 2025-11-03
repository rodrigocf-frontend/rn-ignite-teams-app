import { Body, ButtonContainer, Container, Header } from "./styles";
import { Highlight } from "../../components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../../components/Logo";
import { GroupItem } from "../../components/GroupItem";
import { use } from "react";
import { GroupsContext } from "../../store/GroupsContext";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { ListEmpty } from "../../components/EmptyList";

export function PlayerGroups() {
  const navigation = useNavigation();
  const { groups } = use(GroupsContext);

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <Body>
        <FlatList
          data={groups}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <GroupItem data={item} />}
          ListEmptyComponent={() => (
            <ListEmpty title="Que tal cadastrar a primeira turma?" />
          )}
          contentContainerStyle={{
            gap: 16,
          }}
          showsVerticalScrollIndicator={false}
        />
        <ButtonContainer>
          <Button onPress={() => navigation.navigate("NewGroup")}>
            Criar nova turma
          </Button>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
