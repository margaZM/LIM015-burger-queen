import { getDocs } from "firebase/firestore";
// import { db } from './firebaseConfig.js'

// export const getProducts = () =>  query(collection(db, "products"));
// export const productsCollectionRef =  collection(db, "products");

export const querySnapshot = (db, collection) => getDocs(collection(db, collection));
