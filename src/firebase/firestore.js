// import { getDocs } from "firebase/firestore";
import { collection, getDocs, addDoc, serverTimestamp, query, where } from "firebase/firestore";

/****************** TRAER TODAS LAS COLECCIONES ***************************/
export const querySnapshot = (db, col) => getDocs(collection(db, col));

/****************** AGREGA UNA COLECCION  ***************************/
export const addCollection = (db, col, object) => addDoc(collection(db, col), object); 

/****************** FILTRA POR UNA CONDICION  ***************************/
export const filterQuery = (db, col, property, condition, value) => query(collection(db, col), where(property, condition, value));