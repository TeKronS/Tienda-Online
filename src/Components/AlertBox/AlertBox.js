import { useRef, useEffect } from "react";
import {
  Body,
  ExitButton,
  AlertBoxElemt,
  FixedBox,
  OptionButtonBox,
} from "./styles";
import { useHistory } from "react-router-dom";

export const AlertBox = ({ transitionFinish }) => {
  const refFixedBox = useRef(null);
  const response = useRef(null);
  let history = useHistory();

  useEffect(() => {
    const unblock = history.block(() => {
      transitionFinish();
      return false;
    });

    return unblock;
  }, []);

  function clickYes() {
    refFixedBox.current.classList.toggle("visible");
    response.current = true;
  }
  function clickNo() {
    refFixedBox.current.classList.toggle("visible");
    response.current = false;
  }
  function transitionEnd() {
    transitionFinish(response.current);
  }

  return (
    <Body>
      <FixedBox
        onTransitionEnd={transitionEnd}
        ref={refFixedBox}
        className={"visible"}
      >
        <ExitButton onClick={() => transitionFinish(null)} />
        <AlertBoxElemt>
          <div>
            <div>
              <span>Desea Eliminar esta Venta?</span>
              <OptionButtonBox>
                <button onClick={clickYes}>SI</button>
                <button onClick={clickNo}>NO</button>
              </OptionButtonBox>
            </div>
          </div>
        </AlertBoxElemt>
      </FixedBox>
    </Body>
  );
};
