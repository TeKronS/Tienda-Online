import { db } from "./firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore/lite";

export const querySales = async (idList) => {
  const ventaRef = collection(db, "Ventas");

  const querySnapshot = await query(ventaRef, where("__name__", "in", idList));

  const listDoc = await getDocs(querySnapshot);

  return listDoc;
};
