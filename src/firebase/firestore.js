// import { getDocs } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export const querySnapshot = (db, col) => getDocs(collection(db, col));