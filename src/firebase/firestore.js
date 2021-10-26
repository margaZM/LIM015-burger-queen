// import { getDocs } from "firebase/firestore";
import { collection, getDocs, addDoc, query, where, onSnapshot, doc } from "firebase/firestore";

/****************** TRAER TODAS LAS COLECCIONES ***************************/
export const querySnapshot = (db, col) => getDocs(collection(db, col));

/****************** AGREGA UNA COLECCION  ***************************/
export const addCollection = (db, col, object) => addDoc(collection(db, col), object); 

/****************** FILTRA POR UNA CONDICION  ***************************/
export const filterQuery = (db, col, property, condition, value) => query(collection(db, col), where(property, condition, value));

/****************** actualiza la data(observador)  ***********************/
export const updateSnapshot = (db, col, property, callback) => onSnapshot(doc(db, col, property), { includeMetadataChanges: true }, callback)

export const updateOnSnapshot = (filterQuery) => onSnapshot(filterQuery, (query) => {
  const result = [];
  query.forEach((doc)=>result.push(doc.data().status))
})