import { db } from "./firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";

export const querySales = async (idList) => {
  const ventaRef = collection(db, "Ventas");

  const querySnapshot = query(ventaRef, where("__name__", "in", idList));

  const listDoc = await getDocs(querySnapshot);

  return listDoc;
};

export const populares = async () => {
  const ventaRef = collection(db, "Ventas");

  const querySnapshot = query(ventaRef, orderBy("visits", "desc"), limit(15));

  const listDoc = await getDocs(querySnapshot);
  let docList = [];
  let i = 0;
  while (listDoc.docs.length > i) {
    const id = listDoc.docs[i].id;
    const data = listDoc.docs[i].data();
    docList.push({ id, ...data });

    i++;
  }

  return docList;
};
