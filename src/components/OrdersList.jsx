import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import '../css/orderList.css';

function OrdersList(props) {
  return (
    <>
      <Card title="RESUMEN DEL PEDIDO" bordered={false} key={props.id}>
        <Row className="bg-orange">
          <Col xs={24}>
            <span>{props.table}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Cliente:</p>
          </Col>
          <Col xs={12}>
            <span>{props.client}</span>
          </Col>
        </Row>
        <Row className="bg-order">
          <Col xs={24}>
            <p>Aqui van los pedidos</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Hora de creación:</p>
          </Col>
          <Col xs={12}>
            <span>{props.timeStamp}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Tiempo de espera:</p>
          </Col>
          <Col xs={12}>
            <span>{props.time}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Total:</p>
          </Col>
          <Col xs={12}>
            <span>{props.total}</span>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default OrdersList;