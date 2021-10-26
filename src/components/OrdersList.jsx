import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import '../css/orderList.css';
import ProductsList from '../components/ProductsList.jsx';
import { db } from '../firebase/firebaseConfig.js';
import { querySnapshot } from '../firebase/firestore.js';

function OrdersList(props) {
  const { orderClient } = props;
  
  const singleOrder = {
    idOrder: orderClient.id,
    client: orderClient.client,
    orderSummary: orderClient.order,
    other: orderClient.other,
    status: orderClient.status,
    board: orderClient.table,
    timeCreation: orderClient.time,
    total: orderClient.total,
    waitTimeOrder: orderClient.waitTime
  }

  const result = singleOrder.orderSummary.map((data) => <ProductsList key={data.id} data={data}/>);

  return (
    <>
      <Col xl={6} md={10} sm={12} xs={22} className="columns-container">
        <Card title="RESUMEN DEL PEDIDO" bordered={false}>
          <Row className="bg-orange">
            <Col xs={24}>
              <span>{singleOrder.board}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>Cliente:</p>
            </Col>
            <Col xs={12}>
              <span>{singleOrder.client}</span>
            </Col>
          </Row>
          <Row className="bg-order">
            <Col xs={24}>
              {result}
              <p></p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>Hora de creación:</p>
            </Col>
            <Col xs={12}>
              <span>{singleOrder.timeCreation.toDate().toLocaleString()}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>Tiempo de espera:</p>
            </Col>
            <Col xs={12}>
              <span>{singleOrder.waitTimeOrder} min</span>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>Total:</p>
            </Col>
            <Col xs={12}>
              <span>S/ {singleOrder.total}.00</span>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  )
}

export default OrdersList;