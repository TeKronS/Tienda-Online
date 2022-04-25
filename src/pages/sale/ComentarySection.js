import { useState, useEffect } from "react";
import { ComentaryContainer } from "./styles";
import { ComentaryBox } from "./../../Components/ComentaryBox/ComentaryBox";
import {
  getComentarys,
  setComentarys,
} from "./../../firebase/firebase-comentarys";
import { Timestamp } from "firebase/firestore";

export const ComentarySection = ({ docId, docUid, user }) => {
  const [comentarys, setComentarysData] = useState(null);

  useEffect(() => {
    let mount = true;

    function setState(data) {
      if (mount) setComentarysData(data);
    }

    getComentarys(docId, setState);

    return () => {
      mount = false;
    };
  }, []);

  async function setComentary(text) {
    const date = new Date();
    const time = date.getTime();

    let comentario = {};

    comentario[time] = {
      name: user.userName,
      uid: user.uid,
      comentario: text,
      fecha: Timestamp.fromDate(date),
    };

    const condition = comentarys ? true : false;

    setComentarys(docId, comentario, condition);
  }

  function sendResponse(comentaryId, text) {
    let respuesta = {};
    respuesta[`${comentaryId}.respuesta`] = text;
    setComentarys(docId, respuesta, true);
  }

  function canComment() {
    return docUid !== user.uid;
  }

  return (
    <ComentaryContainer className={"box"}>
      <h3>Preguntas y Respuestas</h3>
      <ComentaryBox
        setComentary={setComentary}
        setResponse={sendResponse}
        mode={canComment}
        data={comentarys}
      />
    </ComentaryContainer>
  );
};
