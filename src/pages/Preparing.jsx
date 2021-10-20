import { useState, useEffect, Fragment } from 'react'
import OrdersList from '../components/OrdersList.jsx';
import { db } from '../firebase/firebaseConfig';
import { querySnapshot } from '../firebase/firestore';
import { Layout } from 'antd';
import Nav from '../components/nav.jsx';

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
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <Nav />
          <Layout style={{ background: "#0e0a17" }}>
            <OrdersList />
          </Layout>
        </Layout>
      </Fragment>
    )
}

export default Preparing
