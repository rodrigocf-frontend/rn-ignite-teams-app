import _ from "lodash";
import { PropsWithChildren, createContext, useState } from "react";

type GroupTime = "A" | "B";

type Players = {
  id: string;
  name: string;
  groupTime: GroupTime;
};

export type Group = {
  id: string;
  name: string;
  players: Players[];
};

type GroupsState = {
  groups: Group[];
  lastPlayerId: number;
  lastGroupId: number;
  createGroup: (name: string) => void;
  deleteGroup: (id: string) => void;
};

const initialState: GroupsState = {
  groups: [],
  lastGroupId: 0,
  lastPlayerId: 0,
  createGroup: (name: string) => {},
  deleteGroup: (id: string) => {},
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

  return (
    <GroupsContext.Provider
      value={{
        ...state,
        createGroup,
        deleteGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
}
