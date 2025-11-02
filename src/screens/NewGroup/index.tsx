import { InputText } from "../../components/InputText";
import { Container, UsersIcon, Wrapper } from "./styles";
import { Button } from "../../components/Button";
import { Highlight } from "../../components/Highlight";
import { use, useState } from "react";
import { GroupsContext } from "../../store/GroupsContext";
import _ from "lodash";
import { Alert } from "react-native";

export function NewGroup() {
  const { groups, createGroup } = use(GroupsContext);
  const [inputText, setInputText] = useState("");
  const [hasError, setError] = useState(false);

  const handleInputChange = (text: string) => {
    setError(false);
    setInputText(text);
  };

  const handleCreateGroup = () => {
    const existGroup = _.filter(groups, { name: inputText.trim() });

    if (inputText.length < 1) {
      setError(true);
      return Alert.alert(
        "Inválido",
        "Nome de turma deve ter no min.(1) caracter."
      );
    }

    if (existGroup.length > 0) {
      setError(true);
      return Alert.alert("Inválido", "Turma já existe.");
    }

    return Alert.alert("Criar", `Criar de turma ${inputText}?`, [
      {
        text: "Sim",
        onPress: () => {
          createGroup(inputText.trim());
          setInputText("");
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  return (
    <Container>
      <UsersIcon />
      <Highlight
        title="Nova Turma"
        subtitle="crie uma turma para adicionar pessoas"
      />
      <Wrapper>
        <InputText
          placeholder="Nome da turma"
          onChangeText={handleInputChange}
          value={inputText}
          hasError={hasError}
        />
        <Button onPress={handleCreateGroup}>Criar</Button>
      </Wrapper>
    </Container>
  );
}
