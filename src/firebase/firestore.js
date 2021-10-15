import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore.js";

export const docRef = (db, nameUser, message, number) => addDoc(collection(db, "orders"), {
    client: nameUser,
    order: [],
    other: message,
    table: number,
    time: serverTimestamp(),
  });

export const querySnapshot = (db, collection) => getDocs(collection(db, collection));
