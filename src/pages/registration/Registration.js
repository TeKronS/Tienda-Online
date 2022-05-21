import { RegistrationForm } from "./ComponetFormRegistro/ComponetFormularioRegistro";
import { Title, BodySection } from "./styles";

export const Registration = ({ user }) => {
  return (
    <BodySection>
      <Title>REGISTRATE</Title>
      <RegistrationForm user={user} />
    </BodySection>
  );
};
