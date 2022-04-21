import { getStorage } from "firebase/storage";
import { db } from "./firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();

//------Images--------------

export const getUploadTask = (file) => {
  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  return uploadTask;
};

export const getImageURL = (uploadTaskRef) => {
  return getDownloadURL(ref((storage, uploadTaskRef)));
};

export const UploadImage = async (file) => {
  const storageRef = ref(storage, `profile/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  if (uploadTask) {
    const onComplete = async () => {
      console.log("complete");
      return getImageURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          return downloadURL;
        })
        .catch((e) => {
          console.log("error", e);
          return null;
        });
    };

    return uploadTask.then(onComplete).catch((e) => {
      console.log("error", e);
      return null;
    });
  } else {
    return null;
  }
};
