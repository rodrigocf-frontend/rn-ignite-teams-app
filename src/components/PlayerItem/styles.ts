import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.GRAY_500};
  border-radius: 6px;
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.GRAY_200};
  font-family: ${({ theme }) => theme.font.ROBOTO_REGULAR};
  font-size: ${({ theme }) => theme.size.NM};
`;

export const Button = styled.TouchableOpacity``;
