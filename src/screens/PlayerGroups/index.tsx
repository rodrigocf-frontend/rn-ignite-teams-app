import { InputText } from "../../components/InputText";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { SelectButton } from "../../components/SelectButton";
import { Highlight } from "../../components/Highlight";

export function PlayerGroups() {
  return (
    <Container>
      <InputText placeholder="Text" />
      <Button>Green</Button>
      <Button bgColor="RED_700">RED</Button>
      <SelectButton>Time A</SelectButton>
      <SelectButton isSelected>Time B</SelectButton>
      <Highlight
        title="Nova Turma"
        subtitle="crie uma turma para adicionar pessoas"
      />
    </Container>
  );
}
