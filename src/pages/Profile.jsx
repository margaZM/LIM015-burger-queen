import { Image, Layout, Row, Col, Button } from 'antd';
import avatar from '../images/avatar.png';
import Nav from '../components/nav.jsx';
import '../css/Profile.css';

const { Content, Header } = Layout;

function Profile() {
    return (
      <Layout className="profile-container">
        <Nav />
        <Layout style={{ background: "#0e0a17" }}>
          <Header style={{ background: "#0e0a17" }} ></Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Row>
              <Col xl={24} md={24}>
                <figure>
                  <Image
                    width={200}
                    src={avatar}
                  />
                  <figcaption>Bienvenid@ <span></span></figcaption>
                </figure>
              </Col>
            </Row>
            <Row>
              <Col xl={24} md={24}>
                <p className="text-status">¿Cómo te sientes hoy?</p>
              </Col>
            </Row>
            <Row>
              <Col xl={24} md={24}>
                <textarea name="textarea">Escribe algo aquí</textarea>
              </Col>
            </Row>
            <Row>
              <Col xl={24} md={24}>
                <Button className="btn-profile">Guardar</Button>
                <Button className="btn-profile">Cambiar</Button>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    )
}

export default Profile;
