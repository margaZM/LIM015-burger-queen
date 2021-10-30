import { Image, Layout, Row, Col, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import avatar from '../images/avatar.png';
import Nav from '../components/nav.jsx';
import '../css/Profile.css';
import { useState, useEffect } from 'react';
import { querySnapshot } from '../firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebaseConfig.js';
import { updateCollection } from '../firebase/firestore.js';
import { updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';

const { Content, Header } = Layout;

const Profile =  () => {

  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const infoUser = await querySnapshot(db, "user");
    return infoUser.docs.map((doc) => ({ id: doc.id, docdata: doc.data() }));
  }

  useEffect(() => {
    getInfo().then((resp) => {
      resp.map((inf) => {
        const result = inf.docdata;
        if (result.email === localStorage.getItem('email')) {
          localStorage.setItem('idUniqueByUser', inf.id);
          setInfo(result);
        }
        return false;
      })
    })
  }, [info]);

  const handlerPhoto = async (e) => {
    //detectar archivo
    const localFile = e.target.files[0];
    //cargarlo a firebase storage
    const fileRef = ref(storage, `documentos/${localFile.name}`);
    await uploadBytes(fileRef, localFile);
    //obtener url de descarga
    const urlDownland = await getDownloadURL(fileRef);
    const userCollection = updateCollection(db, "user", localStorage.getItem('idUniqueByUser'));
    await updateDoc(userCollection, {
      photo: urlDownland
    })
  }

  const handlerDescription = async() => {
    const userCollection = updateCollection(db, "user", localStorage.getItem('idUniqueByUser'));
    swal("Escribe tu estado aquí:", {
      content: "input",
    })
      .then((value) => {
        swal({
          title: "¿Estas segur@ de guardar los cambios?",
          text: "Una vez eliminado no podrás recuperarlo",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((state) => {
            if (state) {
              swal("Tu estado ha sido guardado", {
                icon: "success",
              });
              updateDoc(userCollection, {
                description: value
              })
            }
          });
      });
  }

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
              <Col xl={24} md={24} sm={24} xs={24}>
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
              <button className="container-btn-file">
                < UploadOutlined/>
                <label />
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handlerPhoto} />
              </button>
            </Row>
            <Row>
              <Col xl={24} md={24} sm={24} xs={24}>
                <p className="text-status">¿Cómo te sientes hoy?</p>
              </Col>
            </Row>
            <Row>
              <Col xl={24} md={24} sm={24} xs={24}>
                <textarea id="textDescription" name="textarea" placeholder="Escribe algo aquí..." disabled value={info.description} ></textarea>
              </Col>
            </Row>
            <Row>
              <Col xl={24} md={24} sm={24} xs={24}>
                <Button htmlType="submit" className="btn-profile" onClick={handlerDescription}>Editar</Button>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    )
}

export default Profile;
