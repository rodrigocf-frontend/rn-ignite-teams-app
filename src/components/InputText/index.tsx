import { TextInputProps } from "react-native";
import { Container, ErrorProps } from "./styles";
import { useState } from "react";

export function InputText({ hasError, ...args }: TextInputProps & ErrorProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Container
      {...args}
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      hasError={hasError}
    />
  );
}
