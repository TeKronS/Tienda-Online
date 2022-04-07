import { db } from "./firebase-config";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore/lite";

export const querySales = async (idList) => {
  const ventaRef = collection(db, "Ventas");

  const querySnapshot = await query(ventaRef, where("__name__", "in", idList));
  console.log(querySnapshot);
  const b = await getDocs(querySnapshot);
  console.log(b);
  b.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};
