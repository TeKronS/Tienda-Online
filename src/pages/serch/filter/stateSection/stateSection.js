import { useRef } from "react";

export const StateSection = ({ filterResult }) => {
  const refCheckNuevo = useRef(null);
  const refCheckUsado = useRef(null);

  function changeState(e) {
    if (e.target.checked) {
      const state = e.target.value;
      if (state === "Nuevo") {
        refCheckUsado.current.checked = false;
      } else {
        refCheckNuevo.current.checked = false;
      }
      filterResult({ state: state });
    } else {
      filterResult({ state: false });
    }
  }

  return (
    <section>
      <h3>Estado del Articulo</h3>
      <label htmlFor={"nuevo"}>
        Nuevo
        <input
          ref={refCheckNuevo}
          id={"nuevo"}
          value={"Nuevo"}
          type={"checkbox"}
          name={"state"}
          onChange={changeState}
        />
      </label>
      <label htmlFor={"usado"}>
        Usado
        <input
          ref={refCheckUsado}
          id={"usado"}
          value={"Usado"}
          type={"checkbox"}
          name={"state"}
          onChange={changeState}
        />
      </label>
    </section>
  );
};
