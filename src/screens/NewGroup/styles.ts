import { UsersThreeIcon } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.GRAY_600};
  padding: 150px 24px 0 24px;
  gap: 15px;
`;

export const UsersIcon = styled(UsersThreeIcon).attrs(({ theme }) => ({
  size: 56,
  weight: "regular",
  color: theme.color.GREEN_700,
}))`
  margin: 0 auto;
`;

export const Wrapper = styled.View`
  gap: 10px;
`;
