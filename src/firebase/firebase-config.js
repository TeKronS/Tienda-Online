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
export function signInWithEmailAndPasswords(email, password) {
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

export function RegisterWithEmailAndPass(email, pass, userData) {
  return createUserWithEmailAndPassword(auth, email, pass)
    .then((res) => {
      return addData(userData, res.user.uid);
    })
    .catch(error);
}

function addData(userData, uid) {
  const auth = getAuth();
  return updateProfile(auth.currentUser, {
    displayName: userData.name,
    photoURL:
      "https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg",
  })
    .then(() => {
      return setDataUser(userData, uid);
    })
    .catch(error);
}
//------------

function error(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  alert(errorMessage);
  return null;
}
