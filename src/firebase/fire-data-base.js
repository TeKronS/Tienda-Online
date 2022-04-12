import { db } from "./firebase-config";
import {
  collection,
  getDoc,
  addDoc,
  setDoc,
  doc,
  getDocs,
  updateDoc,
  arrayUnion,
} from "firebase/firestore/lite";
//-------------------------------------

export async function findDataUser(user, signOuts) {
  if (!user.uid) {
    return null;
  }
  const docRef = doc(db, "Usuarios", user.uid);
  const docSnap = await getDoc(docRef);
  try {
    if (docSnap.exists()) {
      const dataUser = { ...docSnap.data(), ...user };
      return dataUser;
    } else {
      console.log("No such document!");
      signOuts();
      return null;
    }
  } catch (e) {
    console.error("Error adding document: ", e);
    signOuts();
    return null;
  }
}
//-----------------------------------------
export async function findHiddenUserData(user) {
  if (!user.uid) {
    return;
  }
  const docRef = doc(db, "Usuarios", user.uid, "HiddenUserData", "0");
  const docSnap = await getDoc(docRef);
  try {
    if (docSnap.exists()) {
      const dataUser = { ...docSnap.data() };
      return dataUser;
    } else {
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//-----------------------------------------
export async function setSales(data) {
  const ventaRef = collection(db, "Ventas");
  try {
    const doc = await addDoc(ventaRef, data);

    addItemsForSale(data.uid, doc.id);
    addTitleForSerch(doc.id, data.title);
    return doc;
  } catch (e) {
    console.log("Error adding document: ", e);
    return null;
  }
}

async function addItemsForSale(document, item) {
  const userRef = doc(db, "Usuarios", document);
  await updateDoc(userRef, {
    itemsForSale: arrayUnion(item),
  });
}
async function addTitleForSerch(id, title) {
  const userRef = doc(db, "TitlesForSerch", id);
  await setDoc(userRef, { title: title });
}
//-----Registro-------------------------------------
export async function setDataUser(userData, uid) {
  const visibleData = {
    userName: userData.userName,
    city: userData.city,
    itemsSold: 0,
    goodNote: 0,
    badNote: 0,
    itemsForSale: [],
    recientViews: {
      0: ["pc", "laptop"],
      1: ["pc", "laptop"],
      2: ["pc", "laptop"],
      3: ["pc", "laptop"],
      4: ["pc", "laptop"],
    },
  };

  const hiddenData = { phone: userData.phone };

  return setDoc(doc(db, "Usuarios", `${uid}`), visibleData)
    .then(() => {
      return setDoc(
        doc(db, "Usuarios", `${uid}`, "HiddenUserData", "0"),
        hiddenData
      )
        .then(() => {
          return setDoc(doc(db, "UserName", `${userData.userName}`), {
            uid: uid,
          });
        })
        .catch(error);
    })
    .catch(error);
}
//----------------------------------------
export async function getCollection(name) {
  const collectionRef = collection(db, name);
  try {
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

//----------------------------------
export async function findDataSales(saleDoc, setState, user) {
  if (!saleDoc) {
    return;
  }
  const docRef = doc(db, "Ventas", saleDoc);
  const docSnap = await getDoc(docRef);
  try {
    if (docSnap.exists()) {
      const dataUser = { ...docSnap.data() };
      if (user) addVisits(saleDoc, user);
      setState(dataUser);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
function addVisits(document, user) {
  const saleRef = doc(db, "Ventas", document);
  const userRef = doc(db, "Usuarios", user);
  updateDoc(saleRef, {
    visits: arrayUnion(user),
  });
  updateDoc(userRef, { "recientViews.0": ["categoria", "sub"] });
}

export async function findDataSale(saleDoc) {
  if (!saleDoc) {
    return;
  }
  const docRef = doc(db, "Ventas", saleDoc);
  const docSnap = await getDoc(docRef);
  try {
    if (docSnap.exists()) {
      const dataSale = { ...docSnap.data() };
      return dataSale;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const updateData = ({ collection, uid, data }) => {
  const userRef = doc(db, collection, uid);
  return updateDoc(userRef, data);
};
export const updateHiddeData = ({ uid, data }) => {
  const userRef = doc(db, "Usuarios", uid, "HiddenUserData", "0");
  return updateDoc(userRef, data);
};

function error(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  alert(errorMessage);
  return null;
}
