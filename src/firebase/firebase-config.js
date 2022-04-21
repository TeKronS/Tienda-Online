import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { setDataUser, findDataUser } from "./fire-data-base";
import { getStorage } from "firebase/storage";
//-------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCHu2Py-w_ZMxHxrnyUQ7j4Lc5h9rxRLKM",
  authDomain: "sesion-tienda-online.firebaseapp.com",
  projectId: "sesion-tienda-online",
  storageBucket: "sesion-tienda-online.appspot.com",
  messagingSenderId: "753606061151",
  appId: "1:753606061151:web:c423d9106370e45d5b3fea",
  measurementId: "G-6LMSET4H74",
};

// Initialize Firebase----------------------

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();
export const storage = getStorage();
//---------------------------------------

function mapUserFromFirebaseAuth(user) {
  const data = user.user ? user.user : user;
  const usuario = {
    uid: data.uid,
    displayName: data.displayName,
    email: data.email,
    photoURL: data.photoURL,
  };
  return usuario;
}
//-----Iniciar Session----------------------
export async function signInWithEmailAndPasswords(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const usuario = mapUserFromFirebaseAuth(res);
      return findDataUser(usuario, signOuts);
    })
    .catch(error);
}
//-----Comprobar Session Activa----------------------
export async function onAuthStateChangeds(onChange) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const usuario = mapUserFromFirebaseAuth(user);
      const dataUser = await findDataUser(usuario, signOuts);
      onChange(dataUser);
    }
  });
}
//-----Log Out----------------------
export function signOuts() {
  return signOut(auth);
}
//-----Registro----------------------

export async function RegisterWithEmailAndPass(email, pass, userData) {
  return createUserWithEmailAndPassword(auth, email, pass)
    .then((res) => {
      return addData(userData, res.user.uid);
    })
    .catch(error);
}

async function addData(userData, uid) {
  return updateProfile(auth.currentUser, {
    displayName: userData.name,
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/sesion-tienda-online.appspot.com/o/profile%2Fuser_icon_001.jpg?alt=media&token=0da13457-55b0-40f0-97ad-4385880e97d2",
  })
    .then(() => {
      return setDataUser(userData, uid);
    })
    .catch(error);
}
//------------

export async function updatePhoto(url) {
  return updateProfile(auth.currentUser, { photoURL: url });
}

function error(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  alert(errorMessage);
  return null;
}
