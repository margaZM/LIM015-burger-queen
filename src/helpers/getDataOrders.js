import { db } from '../firebase/firebaseConfig.js';
import { querySnapshot } from '../firebase/firestore.js';
import { useEffect, useState } from 'react';

const DataOrders = (status) => {
  const [orders, setOrders] = useState([]);
  const getDataOrders = async () => {
    const getQuerySnapshot = await querySnapshot(db, "orders");
    const docs = [];
    getQuerySnapshot.forEach((doc) => {
      if (doc.data().status === status) {
        docs.push({ ...doc.data(), id: doc.id});
      }
      setOrders(docs);
    })
  }

  useEffect(() => {
    getDataOrders()
  }, []);

  return orders;
}

export default DataOrders;