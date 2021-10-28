import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function ProductsList({ data }) {
  return (
    <>
      <Row style={{ padding: 5 }}>
        <Col  xs={4}>
          <span>{data.quantity}</span>
        </Col>
        <Col xs={20}>
            {
              data.type ? <span>{data.name} de {data.type}</span> : <span>{data.name}</span>
            }
        </Col>
      </Row>
    </>
  )
}

export default ProductsList;
