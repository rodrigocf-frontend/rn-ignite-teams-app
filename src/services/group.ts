import AsyncStorage from "@react-native-async-storage/async-storage";
import { Group } from "../store/GroupsContext";
import { AppError } from "../utils/error-handlers";

type GroupStorageData = {
  groups: Group[];
  lastPlayerId: number;
  lastGroupId: number;
};

export const getGroups = async () => {
  try {
    const data = await AsyncStorage.getItem("@groups/data");

    if (data) {
      const dataToJSON = JSON.parse(data) as GroupStorageData;
      return dataToJSON;
    }
    return {
      groups: [],
      lastGroupId: 0,
      lastPlayerId: 0,
    };
  } catch (e) {
    return AppError(e);
  }
};

export const saveGroups = async (data: GroupStorageData) => {
  try {
    await AsyncStorage.setItem("@groups/data", JSON.stringify(data));
  } catch (e) {
    return AppError(e);
  }
};
