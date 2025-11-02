import styled, { DefaultTheme } from "styled-components/native";

export interface ContainerProps {
  bgColor?: keyof DefaultTheme["color"];
  isSelected?: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<ContainerProps>`
  background-color: ${({ theme, bgColor = "GRAY_600" }) =>
    theme.color[bgColor]};
  padding: 8px 12px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme, isSelected = false, bgColor = "GRAY_600" }) =>
    isSelected ? theme.color.GREEN_500 : theme.color[bgColor]};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.ROBOTO_BOLD};
  color: ${({ theme }) => theme.color.GRAY_200};
  font-size: ${({ theme }) => theme.size.SM};
  text-align: center;
`;
