import styled, { DefaultTheme } from "styled-components/native";

export interface ErrorProps {
  hasError?: boolean;
}

interface Props extends ErrorProps {
  isFocused: boolean;
}

export const Container = styled.TextInput.attrs<Props>(({ theme }) => ({
  placeholderTextColor: theme.color.GRAY_300,
}))`
  background-color: ${({ theme }) => theme.color.GRAY_700};
  font-family: ${({ theme }) => theme.font.ROBOTO_REGULAR};
  color: ${({ theme }) => theme.color.GRAY_200};
  font-size: ${({ theme }) => theme.size.NM};
  padding: 16px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ isFocused, theme, hasError }) =>
    borderColorHandler({ isFocused, hasError, theme })};
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
