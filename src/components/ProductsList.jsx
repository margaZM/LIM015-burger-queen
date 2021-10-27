import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import { db } from '../firebase/firebaseConfig';
import { collection } from "firebase/firestore";
// import '../css/orderList.css';

function ProductsList({ data }) {
  return (
    <>
      <Row>
        <Col xs={2}>
          <span>{data.quantity}</span>
        </Col>
        <Col xs={22}>
            {
              data.type ? <span>{data.name} de {data.type}</span> : <span>{data.name}</span>
            }
        </Col>
      </Row>
    </>
  )
}

export default ProductsList;
