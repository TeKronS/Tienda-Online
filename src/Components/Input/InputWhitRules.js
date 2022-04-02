import { Input, IconoValidacion, Container } from "./styles";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

export const InputWhitRules = ({
  type,
  placeholder,
  name,
  cambiarEstado,
  estado,
  expresionRegular,
  funcion
}) => {
  function onChange(e) {
    cambiarEstado({ ...estado, campo: e.target.value });
  }
  function validacion() {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
    if (funcion) {
      funcion();
    }
  }
  return (
    <Container>
      <Input
        type={type}
        placeholder={placeholder}
        id={name}
        value={estado.campo}
        onChange={onChange}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={estado.valido}
      />
      <IconoValidacion
        icon={estado.valido === "true" ? faCheckCircle : faTimesCircle}
        valido={estado.valido}
      />
    </Container>
  );
};
