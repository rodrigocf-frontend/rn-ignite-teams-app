import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.color.GRAY_600};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: ${StatusBar.currentHeight}px 16px ${StatusBar.currentHeight}px 12px;
`;

export const Button = styled.TouchableOpacity``;
