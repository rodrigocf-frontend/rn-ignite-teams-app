import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.color.GRAY_600};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px 0px 16px;
`;

export const Button = styled.TouchableOpacity``;
