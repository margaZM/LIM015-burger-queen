import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import '../css/orderList.css';

function OrdersList() {
  // console.log(props);
  // const { client, other} = orderClient;

  // console.log(client);
  // console.log(other);

  return (
    <>
      <Card title="RESUMEN DEL PEDIDO" bordered={false}>
        <Row className="bg-orange">
          <Col xs={24}>
            <span></span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Cliente:</p>
          </Col>
          <Col xs={12}>
            <span></span>
          </Col>
        </Row>
        <Row className="bg-order">
          <Col xs={24}>
            {/* AQUI LLAMAR AL OTRO COMPONENTE */}
            <p></p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Hora de creación:</p>
          </Col>
          <Col xs={12}>
            <span></span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Tiempo de espera:</p>
          </Col>
          <Col xs={12}>
            {/* AQUI FALTA DATOS DE LA BASE DE DATOS */}
            <span></span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Total:</p>
          </Col>
          <Col xs={12}>
            {/* AQUI FALTA DATOS DE LA BASE DE DATOS */}
            <span></span>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default OrdersList;