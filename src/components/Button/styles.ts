import styled, { DefaultTheme } from "styled-components/native";

export interface ContainerProps {
  bgColor?: keyof DefaultTheme["color"];
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<ContainerProps>`
  background-color: ${({ theme, bgColor = "GREEN_700" }) =>
    theme.color[bgColor]};
  padding: 16px 24px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.ROBOTO_BOLD};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: ${({ theme }) => theme.size.NM};
  text-align: center;
`;
