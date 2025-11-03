import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.ROBOTO_REGULAR};
  color: ${({ theme }) => theme.color.GRAY_300};
  font-size: ${({ theme }) => theme.size.NM};
  text-align: center;
`;
