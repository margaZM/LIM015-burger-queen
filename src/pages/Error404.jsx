import 'antd/dist/antd.css';
import { Row, Col, Image, Tag, Space } from 'antd';
import '../css/Error404.css';
import error404 from '../images/error404.svg';

function Error404() {
  return (
    <section className="error-container">
      <Row gutter={[16, 16]}>
        <Col md={24} lg={24}>
          <p className="text-error">Oops! Lo sentimos pero no se encontro lo que buscabas</p>
          <figure>
            <Image preview={false} src={error404} alt={"not found"} />
          </figure>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col md={24} lg={24}>
          <p className="text-error">O tal vez quisiste visitar alguno de los sgtes links:</p>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col>
          <Tag>
            <a href="/">Inicio</a>
          </Tag>
        </Col>
        <Col>
          <Tag>
            <a href="/register">Registro</a>
          </Tag>
        </Col>
      </Row>
    </section>
  );
}



export default Error404;
