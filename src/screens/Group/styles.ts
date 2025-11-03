import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.color.GRAY_600};
  padding: 0 24px;
`;

export const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.color.GRAY_600};
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.GRAY_700};
  border-radius: 6px;
  margin: 40px 0 0 0;
`;

export const FilterContainer = styled.View`
  padding: 20px 0 0 0;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 40px 0;
`;

export const FilterWrapper = styled.View`
  flex-direction: row;
`;

export const Count = styled.Text`
  font-family: ${({ theme }) => theme.font.ROBOTO_BOLD};
  color: ${({ theme }) => theme.color.GRAY_200};
  font-size: ${({ theme }) => theme.size.SM};
  text-align: center;
  vertical-align: middle;
`;
