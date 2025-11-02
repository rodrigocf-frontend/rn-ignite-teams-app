import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlayerGroups } from "../screens/PlayerGroups";
import {
  StaticParamList,
  createStaticNavigation,
} from "@react-navigation/native";
import { theme } from "../themes";

const RootRoutes = createNativeStackNavigator({
  screens: {
    PlayerGroups: {
      screen: PlayerGroups,
      options: {
        headerShown: false,
        // headerStyle: {
        //   backgroundColor: theme.color.GRAY_600,
        // },
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootRoutes);

type RootStackParamList = StaticParamList<typeof RootRoutes>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
