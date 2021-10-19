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
        {
          orders.map((order) => <OrdersList
              id={order.id}
              table={order.docdata.table[0]}
              client={order.docdata.client}
              order={order.docdata.order}
              timeStamp={order.docdata.time}
              time={15}
              total={15}
            />)
        }
      </div>
    )
}

export default Preparing
