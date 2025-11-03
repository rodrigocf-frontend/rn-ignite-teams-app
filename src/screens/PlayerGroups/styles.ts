import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.color.GRAY_600};
`;

export const Header = styled.View`
  margin: 50px 0 40px 0px;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  padding: 50px 24px 40px 24px;
  border-radius: 6px;
  flex: 1;
`;

export const ButtonContainer = styled.View`
  padding-top: 20;
`;
