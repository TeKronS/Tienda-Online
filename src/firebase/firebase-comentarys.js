import { db } from "./firebase-config";
import { onSnapshot, doc, updateDoc, setDoc } from "firebase/firestore";

export function getComentarys(saleId, setState) {
  const comentarysRef = doc(db, "Comentarys", saleId);
  onSnapshot(comentarysRef, (doc) => {
    const data = Object.entries(doc.data()).map((doc) => {
      const id = doc[0];
      const data = doc[1];
      return { id, data };
    });

    data
      .sort(function (a, b) {
        return a.data.fecha.seconds - b.data.fecha.seconds;
      })
      .reverse();

    setState(data);
  });
}

export async function setComentarys(saleId, comentary, condition) {
  const comentarysRef = doc(db, "Comentarys", saleId);
  if (condition) {
    return updateDoc(comentarysRef, comentary).catch(error);
  } else {
    return setDoc(comentarysRef, comentary).catch(error);
  }
}

function error(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  alert(errorMessage);
  return null;
}
