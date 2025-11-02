import { InputText } from "../../components/InputText";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { SelectButton } from "../../components/SelectButton";

export function PlayerGroups() {
  return (
    <Container>
      <InputText placeholder="Text" />
      <Button>Green</Button>
      <Button bgColor="RED_700">RED</Button>
      <SelectButton>Time A</SelectButton>
      <SelectButton isSelected>Time B</SelectButton>
    </Container>
  );
}
