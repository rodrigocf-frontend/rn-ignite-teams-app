import _ from "lodash";
import { PropsWithChildren, createContext, useState } from "react";

export type Team = "A" | "B";

export type Player = {
  id: string;
  name: string;
  team: Team;
};

export type Group = {
  id: string;
  name: string;
  players: Player[];
};

type GroupsState = {
  groups: Group[];
  lastPlayerId: number;
  lastGroupId: number;
  createGroup: (name: string) => void;
  deleteGroup: (id: string) => void;
  addPlayer: (player: AddPlayerParams) => void;
  removePlayer: (player: RemovePlayerParams) => void;
};

const initialState: GroupsState = {
  groups: [],
  lastGroupId: 0,
  lastPlayerId: 0,
  createGroup: (name: string) => {},
  deleteGroup: (id: string) => {},
  addPlayer: (player: AddPlayerParams) => {},
  removePlayer: (player: RemovePlayerParams) => {},
};

type AddPlayerParams = Omit<Player, "id"> & {
  groupId: string;
};

type RemovePlayerParams = Omit<Player, "group" | "name"> & {
  groupId: string;
};

export const GroupsContext = createContext(initialState);

export function GroupsProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState(initialState);

  const createGroup = (name: string) =>
    setState((prevState) => ({
      ...prevState,
      groups: [
        {
          id: (prevState.lastGroupId + 1).toString(),
          name,
          players: [],
        },
        ...prevState.groups,
      ],
      lastGroupId: prevState.lastGroupId + 1,
    }));

  const deleteGroup = (id: string) =>
    setState((prevState) => ({
      ...prevState,
      groups: _.reject(prevState.groups, { id }),
      lastGroupId: prevState.lastGroupId - 1,
    }));

  const addPlayer = ({ team, name, groupId }: AddPlayerParams) => {
    setState((prevState) => ({
      ...prevState,
      groups: _.map(prevState.groups, (group) => {
        if (group.id === groupId) {
          return {
            ...group,
            players: [
              {
                id: (prevState.lastPlayerId + 1).toString(),
                name,
                team,
              },
              ...group.players,
            ],
          };
        }
        return group;
      }),
      lastPlayerId: prevState.lastPlayerId + 1,
    }));
  };

  const removePlayer = ({ id, groupId }: RemovePlayerParams) => {
    setState((prevState) => ({
      ...prevState,
      groups: _.map(prevState.groups, (group) => {
        if (group.id === groupId) {
          return {
            ...group,
            players: _.reject(group.players, { id }),
          };
        }
        return group;
      }),
    }));
  };

  return (
    <GroupsContext.Provider
      value={{
        ...state,
        createGroup,
        deleteGroup,
        addPlayer,
        removePlayer,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
}
