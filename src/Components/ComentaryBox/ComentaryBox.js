import { useRef } from "react";
import { Body, ComentaryInput, SendButton, ComentaryCardBody } from "./styles";
import { ComentaryCard } from "./ComentaryCard.js";

export const ComentaryBox = ({ setComentary, setResponse, mode, data }) => {
  const text = useRef("");
  const refInput = useRef(null);

  function handledChanged(e) {
    text.current = e.target.value;
    e.target.style.height = `${e.target.scrollHeight - 26}px`;
  }

  function sendComentary() {
    if (text.current !== "" && !/^\s+$/.test(text.current)) {
      setComentary(text.current);
      text.current = "";
      refInput.current.value = "";
    }
  }

  function sendResponse(comentaryId) {
    if (text.current !== "" && !/^\s+$/.test(text.current)) {
      setResponse(comentaryId, text.current);
      text.current = "";
    }
  }

  return (
    <Body>
      {mode() && (
        <>
          <ComentaryInput ref={refInput} onChange={handledChanged} />
          <SendButton onClick={sendComentary}>Preguntar</SendButton>
        </>
      )}
      {data ? (
        data.map((doc) => {
          const { id, data } = doc;
          return (
            <ComentaryCard
              key={id}
              id={id}
              data={data}
              mode={mode}
              sendResponse={sendResponse}
              handledChanged={handledChanged}
            />
          );
        })
      ) : (
        <ComentaryCardBody>No hay Comentarios</ComentaryCardBody>
      )}
    </Body>
  );
};
