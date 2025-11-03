import styled, { DefaultTheme } from "styled-components/native";

export interface ErrorProps {
  hasError?: boolean;
}

interface Props extends ErrorProps {
  isFocused: boolean;
}

export const Container = styled.View<Props>`
  background-color: ${({ theme }) => theme.color.GRAY_700};
  flex-direction: row;
  border-color: ${({ isFocused, theme, hasError }) =>
    borderColorHandler({ isFocused, hasError, theme })};
  border-radius: 6px;
  border-width: 1px;
  justify-content: space-between;
  align-items: center;
`;

export const TextField = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.color.GRAY_300,
}))`
  font-family: ${({ theme }) => theme.font.ROBOTO_REGULAR};
  color: ${({ theme }) => theme.color.GRAY_200};
  font-size: ${({ theme }) => theme.size.NM};
  padding: 16px;
  flex: 1;
  border-radius: 6px;
`;

const borderColorHandler = ({
  isFocused,
  theme,
  hasError,
}: Props & { theme: DefaultTheme }) => {
  if (hasError) {
    return `${theme.color.RED_500}`;
  }
  if (isFocused) {
    return `${theme.color.GREEN_500}`;
  }
  return `${theme.color.GRAY_700}`;
};

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  padding-right: 16px;
  justify-content: center;
  align-items: center;
`;
