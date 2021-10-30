import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider } from 'antd';
import '../css/orderList.css';
import ProductsList from '../components/ProductsList.jsx';
import { db } from '../firebase/firebaseConfig.js';
import { updateDoc } from "firebase/firestore";
import { updateCollection } from '../firebase/firestore.js';

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

  // Wait time(resta el timestamp con la hora actual y lo manda en una sola peticion a la base e datos)
  let timestamp = singleOrder.timeCreation.toDate();
  const now = new Date();
  const diff = Math.abs(now - timestamp); //diferencia de tiempo
  const convertedToString = diff.toString(); // convertirlo a string la diferencia
  const converterToHour = convertedToString.substr(0, 2) + ':' + convertedToString.substr(2, 2) + ':' + convertedToString.substr(4, 2);

  //contador en vivo
  const nSecondInMiliseconds = 1000;
  const convertMilisecondsToHour = (miliseconds) => new Date(miliseconds).toISOString().slice(11, -5);
  let [timerCount, setTimerCount] = useState(0);
  let interval;

  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      const now = new Date();
      const diff = Math.abs(now - timestamp);
      setTimerCount(diff);
    }, nSecondInMiliseconds);

    return () => clearInterval(interval); // Esto es necesario para evitar leaks de memoria
  }, []);

  // renderiza
  const result = (singleOrder.orderSummary.length > 0) && singleOrder.orderSummary.map((data) => <ProductsList key={data.id} data={data} />)

  // evento onclick
  const handleStatusOrder = async(e) => {

    const statusOrder = e.target.attributes[2].textContent;
    const idTable = e.target.attributes[3].textContent;
    const idOrder = e.target.id;

    const availableTables = updateCollection(db, "tables", idTable);
    const updateStatusOrder = updateCollection(db, "orders", idOrder);

    switch (statusOrder) {
      case 'preparing':
        await updateDoc(updateStatusOrder, {
          status: "done",
          waitTime: converterToHour
        })
        break;
      case 'done':
        await updateDoc(updateStatusOrder, {
          status: "delivered",
        }) && await updateDoc(availableTables, {
          status: "true",
        })
        break;
      default:
        return;
    }
  }

  return (
    <>
      <Col xl={1} md={1} sm={1} xs={1}>
      </Col>
      <Col xl={6} md={10} sm={10} xs={22} className="columns-container">
        <Card title="RESUMEN DEL PEDIDO" bordered={false}>
          <Row className="bg-orange">
            <Col xs={24}>
              <span>{singleOrder.board}</span>
            </Col>
          </Row>

          <Row>
            <Col xs={14}>
              <p>Cliente:</p>
            </Col>
            <Col xs={10}>
              <span>{singleOrder.client}</span>
            </Col>
            <Divider style={{ background: "white", marginTop: 0 }} />
          </Row>

          <Row >
            <Col xs={4}>
              <p>Cant: </p>
            </Col>

            <Col xs={1}></Col>

            <Col xs={19} >
              <p>Descripción: </p>
            </Col>
          </Row>
          
          <Row className="bg-order">
            <Col xs={24}>
              {result}
              <p></p>
            </Col>
          </Row>

          <Row>
            <Divider style={{ background: "white" }} />
            <Col xs={14}>
              <p>Hora de creación:</p>
            </Col>
            <Col xs={10}>
              <span>{singleOrder.timeCreation.toDate().toLocaleString()}</span>
            </Col>
          </Row>
          {
            (singleOrder.status !== 'preparing') ? (<Row>
              <Col xs={14}>
                <p>Tiempo de espera:</p>
              </Col>
              <Col xs={10}>
                <span> {singleOrder.waitTimeOrder} min</span>
              </Col>
            </Row>) : (<Row>
              <Col xs={14}>
                <p>Tiempo de espera:</p>
              </Col>
              <Col xs={10}>
                  <span> {convertMilisecondsToHour(timerCount)} min</span>
              </Col>
            </Row>)
          }
          <Row>
            <Col xs={14}>
              <p>Total:</p>
            </Col>
            <Col xs={10}>
              <span>S/ {singleOrder.total}.00</span>
            </Col>
          </Row>
          {
            (singleOrder.status !== 'delivered') && (<Row gutter={[16, 8]}>
              <Col className="btn-container">
                <button className="form-button" id={singleOrder.idOrder} status={singleOrder.status} table={singleOrder.board} onClick={handleStatusOrder}>LISTO</button>
              </Col>
            </Row>)
          }
        </Card>
      </Col>
      <Col xl={1} md={1} sm={1} xs={1}>
      </Col>
    </>
  )
}

export default OrdersList;