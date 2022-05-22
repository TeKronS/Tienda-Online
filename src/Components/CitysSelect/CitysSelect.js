import { Select } from "./styles";
import { cityOfVenezuela } from "../../cityOfVenezuela";

export const CitysSelect = ({ estado, cambiarEstado }) => {
  const validacion = () => {
    if (cityOfVenezuela.includes(estado.campo)) {
      cambiarEstado({ ...estado, valido: "true" });
    } else {
      cambiarEstado({ ...estado, valido: "false" });
    }
  };
  function changedSelect(e) {
    if (cityOfVenezuela.includes(e.target.value)) {
      cambiarEstado({ campo: e.target.value, valido: "true" });
    }
  }
  return (
    <Select
      valido={estado.valido}
      id={"Ciudad"}
      value={estado.campo}
      onChange={changedSelect}
      onKeyUp={validacion}
      onBlur={validacion}
      required
    >
      <option value={""} disabled>
        Seleccione una Ciudad
      </option>
      {cityOfVenezuela.map((state) => {
        return (
          <option key={state} value={state}>
            {state}
          </option>
        );
      })}
    </Select>
  );
};
