import { Image, Layout, Row, Col, Button } from 'antd';
import avatar from '../images/avatar.png';
import Nav from '../components/nav.jsx';
import '../css/Profile.css';
import { useState, useEffect } from 'react';
import { querySnapshot } from '../firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const { Content, Header } = Layout;

function Profile() {

  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const infoUser = await querySnapshot(db, "user");
    return infoUser.docs.map((doc) => ({ id: doc.id, docdata: doc.data()}));
  }

  useEffect(() => {
    getInfo().then((resp) => {
      resp.map((inf) => {
        const result = inf.docdata;
        if (result.email === localStorage.getItem('email')) {
          setInfo(result);
        }
        return false 
      })
    })
  }, []);

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
                    src={
                      info.photo === '' ? avatar : info.photo
                    }
                  />
                  <figcaption>Bienvenid@ <span>{info.name}</span></figcaption>
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
                <textarea name="textarea" placeholder="Escribe algo aquí" value={info.description}disabled></textarea>
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
