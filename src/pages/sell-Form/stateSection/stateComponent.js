import { BoxStateSection, BoxState, State } from "./styles";

export const StateComponent = ({ stateChanged }) => {
  function handleClick(e) {
    const element = e.target.children[0];
    if (element) {
      element.click();
    }
  }
  return (
    <BoxStateSection>
      <h3>Estado</h3>
      <BoxState>
        <State className={"box"} onClick={handleClick}>
          <label htmlFor={"Nuevo"}>Nuevo</label>
          <input
            tabIndex={"-1"}
            id={"Nuevo"}
            name={"estado"}
            type={"radio"}
            onClick={stateChanged}
          />
        </State>
        <State className={"box"} onClick={handleClick}>
          <label htmlFor={"Usado"}>Usado</label>
          <input
            tabIndex={"-1"}
            id={"Usado"}
            name={"estado"}
            type={"radio"}
            onClick={stateChanged}
          />
        </State>
      </BoxState>
    </BoxStateSection>
  );
};
