import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase-config";
//---------------------------------

//-----------------------------------
export const uploadImages = (file) => {
  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return uploadTask;
};
