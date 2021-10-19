import { useState, useEffect } from 'react'
import OrdersList from '../components/OrdersList.jsx';
import { db } from '../firebase/firebaseConfig';
import { querySnapshot } from '../firebase/firestore';

function Preparing() {

  const [orders, setOrders] = useState();

  const getOrder = async () => {
    const list = await querySnapshot(db, "orders");
    return list.docs.map((doc) => ({ id: doc.id, docdata: doc.data() }));
  };

  useEffect(() => {
    getOrder().then((order) => setOrders(order))
  }, []);
  console.log(orders);

    return (
      <div>
        
      </div>
    )
}

export default Preparing
