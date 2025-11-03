import { TextInputProps } from "react-native";
import { Container, ErrorProps, TextField } from "./styles";
import { ReactNode, useState } from "react";
import { Button } from "./styles";

type Props = TextInputProps &
  ErrorProps & {
    afterInput?: {
      onPress?: () => void;
      Icon?: ReactNode;
    };
  };

export function InputText({ hasError, afterInput, ...args }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Container isFocused={isFocused} hasError={hasError}>
      <TextField
        placeholder="Nome do participante"
        {...args}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {afterInput && (
        <Button onPress={afterInput?.onPress}>{afterInput?.Icon}</Button>
      )}
    </Container>
  );
}
