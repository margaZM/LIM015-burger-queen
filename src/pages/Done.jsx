// import { useState, useEffect } from 'react';
import OrdersList from '../components/OrdersList';
import { Layout, Row, Col } from 'antd';
import Nav from '../components/nav.jsx';
import DataOrders from '../helpers/getDataOrders.js';
//pruebas
// import { orderByTimeStamp } from '../firebase/firestore';
// import { db } from '../firebase/firebaseConfig';
// import { collection, query, where, onSnapshot } from "firebase/firestore";

function Done() {
  const orders = DataOrders("done");

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
              <h1 className='title-view'>PEDIDOS LISTOS</h1>
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

export default Done
