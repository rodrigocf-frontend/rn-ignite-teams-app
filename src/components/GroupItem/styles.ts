import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.color.GRAY_500};
  justify-self: stretch;
  border-radius: 6px;
  flex-direction: row;
  gap: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_100};
  font-family: ${({ theme }) => theme.font.ROBOTO_REGULAR};
  font-size: ${({ theme }) => theme.size.LG};
`;
