import { useState, useEffect } from 'react';
import '../css/Delivered.css';
import { Layout, Row, Col } from 'antd';
import Nav from '../components/nav.jsx';
import DataOrders from '../helpers/getDataOrders.js';
import OrdersList from '../components/OrdersList.jsx';

function Delivered() {
  const orders = DataOrders("delivered");

  const items = orders.length > 0 && orders.map((orderClient) => {
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