import { RegistrationForm } from "./ComponetFormRegistro/ComponetFormularioRegistro";
import { Title, BodySection } from "./styles";
export const Registration = ({ setState, user }) => {
  return (
    <BodySection>
      <Title>REGISTRATE</Title>
      <RegistrationForm setState={setState} user={user} />
    </BodySection>
  );
};
