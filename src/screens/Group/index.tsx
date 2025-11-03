import {
  useNavigation,
  type StaticScreenProps,
} from "@react-navigation/native";
import {
  Container,
  Count,
  FilterContainer,
  FilterWrapper,
  InputContainer,
} from "./styles";
import { use, useState } from "react";
import { Team, GroupsContext, Player } from "../../store/GroupsContext";
import _ from "lodash";
import { Highlight } from "../../components/Highlight";
import { InputText } from "../../components/InputText";
import { Play, PlusIcon } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { SelectButton } from "../../components/SelectButton";
import { isATeam, isBTeam } from "../../utils/team-helpers";
import { Alert, FlatList } from "react-native";
import { PlayerItem } from "../../components/PlayerItem";
import { ListEmpty } from "../../components/EmptyList";
import { Button } from "../../components/Button";

type Props = StaticScreenProps<{
  id: string;
}>;

export function Group({ route }: Props) {
  const { groups, addPlayer, removePlayer, deleteGroup } = use(GroupsContext);
  const [inputText, setInputText] = useState("");
  const [team, setTeam] = useState<Team>("A");
  const theme = useTheme();
  const navigation = useNavigation();

  const { players, name } = _.filter(groups, { id: route.params.id })[0];
  const handleSelectTeam = (team: Team) => setTeam(team);

  const handleAddPlayer = () => {
    if (inputText.length < 1) {
      return Alert.alert(
        "Inválido",
        "Nome do jogador deve ter no min.(1) caracter."
      );
    }

    const existPlayerOnTeam = _.filter(players, { name: inputText.trim() });
    if (existPlayerOnTeam.length > 0) {
      return Alert.alert(
        "Inválido",
        `${inputText} já existe no time ${existPlayerOnTeam[0].team}.`
      );
    }

    return Alert.alert(
      "Adicionar",
      `Adicionar ${inputText} ao time ${team} ?`,
      [
        {
          text: "Sim",
          onPress: () => {
            addPlayer({
              team,
              groupId: route.params.id,
              name: inputText.trim(),
            });

            setInputText("");
          },
        },
        {
          text: "Não",
        },
      ]
    );
  };

  const handleRemovePlayer = (player: Player) => {
    return Alert.alert("Remover", `Remover ${player.name} do time ${team}?`, [
      {
        text: "Sim",
        onPress: () => {
          removePlayer({ groupId: route.params.id, team, id: player.id });
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  const handleDeleteGroup = () => {
    return Alert.alert("Remover", `Remover time ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          deleteGroup(route.params.id);
          navigation.goBack();
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  const currentTeam = _.filter(players, { team });
  const currenTeamSize = _.size(currentTeam);

  return (
    <Container>
      <Highlight title={name} subtitle="Adicione a galera e separe os times" />

      <InputContainer>
        <InputText
          onChangeText={setInputText}
          value={inputText}
          afterInput={{
            Icon: <PlusIcon size={24} color={theme.color.GREEN_700} />,
            onPress: () => handleAddPlayer(),
          }}
        />
      </InputContainer>

      <FilterContainer>
        <FilterWrapper>
          <SelectButton
            isSelected={isATeam(team)}
            onPress={() => handleSelectTeam("A")}
          >
            Time A
          </SelectButton>
          <SelectButton
            isSelected={isBTeam(team)}
            onPress={() => handleSelectTeam("B")}
          >
            Time B
          </SelectButton>
        </FilterWrapper>
        <Count>{currenTeamSize}</Count>
      </FilterContainer>

      <FlatList
        data={currentTeam}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlayerItem data={item} onRemove={() => handleRemovePlayer(item)} />
        )}
        contentContainerStyle={{
          gap: 6,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ListEmpty title="Não há pessoas nesse time." />}
      />

      <Button bgColor="RED_700" onPress={() => handleDeleteGroup()}>
        Remover turma
      </Button>
    </Container>
  );
}
