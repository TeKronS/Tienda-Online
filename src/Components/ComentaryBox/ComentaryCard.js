import { useState } from "react";
import {
  ComentaryCardBody,
  Name,
  Comentary,
  Response,
  ComentaryInput,
  SendButton,
  Time,
} from "./styles";
import { timeAgo } from "./../../TimeAgo/TimeAgo";

export const ComentaryCard = ({
  id,
  data,
  mode,
  sendResponse,
  handledChanged,
}) => {
  const [isResp, setResp] = useState(false);

  const { name, comentario, fecha, respuesta } = data;

  const timestamp = fecha.seconds * 1000;
  const { dateTime, timeago } = timeAgo(timestamp);

  function handledClickResponse() {
    if (isResp) {
      sendResponse(id);
      setResp(false);
    } else {
      setResp(true);
    }
  }

  return (
    <ComentaryCardBody>
      <Name>
        Comentario de: <span>{name}</span>
        <Time datetime={dateTime}>{timeago}</Time>
      </Name>
      <Comentary>{comentario}</Comentary>
      {respuesta ? (
        <Response>
          <div>|__</div>
          <span>{respuesta}</span>
        </Response>
      ) : (
        !mode() && (
          <>
            {isResp && <ComentaryInput onChange={handledChanged} />}
            <SendButton onClick={handledClickResponse}>Responder</SendButton>
          </>
        )
      )}
    </ComentaryCardBody>
  );
};
