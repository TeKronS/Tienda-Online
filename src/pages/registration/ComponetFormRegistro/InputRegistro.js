import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  Label,
  GrupoInput,
  IconoValidacion,
  LeyendaError,
  Input
} from "./StylesElementRegistro.js";

export const ComponenteInput = ({
  label,
  placeholder,
  type,
  name,
  leyendaError,
  expresionRegular,
  estado,
  cambiarEstado,
  funcion
}) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };
  const validacion = () => {
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
  };
  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>
        {label}
      </Label>
      <GrupoInput>
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
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};
