import { TouchableOpacityProps } from "react-native";
import { Container, ContainerProps, Title } from "./styles";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<TouchableOpacityProps & ContainerProps>;

export function Button({ children, ...args }: Props) {
  return (
    <Container {...args}>
      <Title>{children}</Title>
    </Container>
  );
}
