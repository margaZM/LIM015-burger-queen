import { Image, Layout, Row, Col, Button } from 'antd';
import avatar from '../images/avatar.png';
import Nav from '../components/nav.jsx';
import '../css/Profile.css';
import { useState, useEffect } from 'react';
import { querySnapshot } from '../firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const { Content, Header } = Layout;

function Profile(props) {

  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const infoUser = await querySnapshot(db, "user");
    return infoUser.docs.map((doc) => ({ id: doc.id, docdata: doc.data()}));
  }

  useEffect(() => {
    getInfo().then((infU) => setInfo(infU))
  }, []);
  console.log(info);

  info.map((infU) => {
    if (infU.docdata.email === 'estefania_8_3@hotmail.com') {
      console.log(infU.docdata.name);
    }
  });

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
                  <figcaption>Bienvenid@ <span>
                    {/* {
                      info.map((des) => (des.docdata.name))
                    } */}
                  </span></figcaption>
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
                <textarea name="textarea" placeholder="Escribe algo aquí">{props.description}</textarea>
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
