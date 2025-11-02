import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.color.RED_500};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.ROBOTO_BOLD};
  font-size: ${({ theme }) => theme.size.LG};
`;
