import styled from "styled-components/native";

interface Props {
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
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.color.GREEN_500 : theme.color.GRAY_700};
`;
