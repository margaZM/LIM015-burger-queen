import { useState, useEffect } from 'react';
import '../css/Delivered.css';
import { Layout, Row, Col } from 'antd';
import Nav from '../components/nav.jsx';
import { db } from '../firebase/firebaseConfig.js';
import { querySnapshot } from '../firebase/firestore.js';
import OrdersList from '../components/OrdersList.jsx';
// import { onSnapshot } from "firebase/firestore";

function Delivered() {
  const [orders, setOrders] = useState([]);

  const getDataOrders = async () => {
    const getQuerySnapshot = await querySnapshot(db, "orders");
    const docs = [];
    getQuerySnapshot.forEach((doc) => {
      if (doc.data().status === "delivered") {
        docs.push({ ...doc.data(), id: doc.id});
      }
      setOrders(docs);
    })
  }

  useEffect(() => {
    getDataOrders()
  }, []);

  const items = orders.map((orderClient) => {
    return (<OrdersList
      key={orderClient.id}
      orderClient={orderClient}
    />)
  })

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Nav />
        <Layout style={{ background: "#0e0a17" }}>
          <Row gutter={[16, 8]}>
            <Col xs={20} className="container-title">
              <h1 className='title-view'>DESPACHADOS</h1>
              <hr className='divider-line' />
            </Col>
          </Row>
          <Row gutter={[16, 8]}>
              {items}
          </Row>
        </Layout>
      </Layout>
    </>
  )
}

export default Delivered;