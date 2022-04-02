import { db } from "./firebase-config";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  getDoc
} from "firebase/firestore/lite";

export const querySales = async (palabra) => {
  // const collectionRef = collection(db, "Ventas");
  // console.log(firebase.firestore.FieldPath.documentId())
  // try {
  //   const querySnapshot = await getDocs(collectionRef);
  //   // setState(querySnapshot.docs);
  //   console.log(querySnapshot.docs);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  //   return null;
  // }
  const ventaRef = collection(db, "Ventas");
  let arr = [
    " L7iG6UOC2yqvCi9KhjFZ",
    "SZpoUWyik0EoCVOsZ51K",
    "UNJdR2gLSr0FYqfiTaUV",
    "Ulet8VNcANCWONDm0Ilv",
    "XflHvqHBblyjq2PcB8PI",
    "ZcmIJN9wab2YeMJol4v0",
    "hrrZBUIu1XJr8O0oOdhY",
    "oINbgo3yD9dxocugdXZk",
    "sTa87t9rgCLXFNDR3IZQ",
    "v25ELDVFfQg5i7sbo5jv",
    "wOGQUBZfA3EqzyVOxqYT",
    "y7kQMawB58Alno3mGPUj",
    "y8o3zK25TjAAWVp8zB1F"
  ];
  const q = query(ventaRef, where("__name__", "array-contains-any", arr));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};
