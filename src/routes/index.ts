import { PlayerGroups } from "../screens/PlayerGroups";
import { theme } from "../themes";
import { NewGroup } from "../screens/NewGroup";
import {
  StaticParamList,
  createStaticNavigation,
} from "@react-navigation/native";
import { Header } from "../components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootRoutes = createNativeStackNavigator({
  screens: {
    PlayerGroups: {
      screen: PlayerGroups,
      options: {
        headerShown: false,
      },
    },
    NewGroup: {
      screen: NewGroup,
      options: {
        header: Header,
        headerStyle: {
          backgroundColor: theme.color.GRAY_600,
        },
        headerShadowVisible: false,
        title: "",
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
