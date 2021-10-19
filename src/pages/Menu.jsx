import { useState, useEffect } from 'react'
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import { Layout, Row, Col, Tabs } from 'antd';
import '../css/main.css'; 
import Nav from '../components/nav.jsx';
import OrderForm from '../components/OrderForm.jsx';
import MenuCards from '../components/MenuCards.jsx'

const { Content, Header } = Layout; 
const { TabPane } = Tabs; 

function MenuApp() {

    const [products, setProducts] = useState([]);
    const productsCollectionRef =  collection(db, "products");

    // useEffect(() => {
    //     const getProducts = async () => {
    //         const data = await getDocs(productsCollectionRef);
    //         setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getProducts();

    // }, [productsCollectionRef]);

    return (
    <Layout style={{ minHeight: "100vh" }}>
      <Nav/>
      <Layout style={{ background: "#0e0a17" }}>
        <Header style={{ background: "#0e0a17" }} > </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Row gutter={[16,16]}>
            <Col xl={15} md={24}>
              <Tabs defaultActiveKey="1" >
                <TabPane tab="Desayunos" key="1">
                  <Row>
                    <Col xl={24} md={24}>
                      <Row gutter={[16, 8]}>
                        <Col xl={8} md={8} xs={24}>
                          <MenuCards/>
                        </Col>
                        <Col xl={8} md={8} xs={24}>
                            <MenuCards/>
                        </Col>
                        <Col xl={8} md={8} xs={24}>
                            <MenuCards/>
                        </Col>
                        <Col xl={8} md={8} xs={24}>
                            <MenuCards/>
                        </Col>
                        <Col xl={8} md={8} xs={24}>
                        <MenuCards/>
                        </Col>
                        <Col xl={8} md={8} xs={24}>
                        <MenuCards/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Almuerzos" key="2">
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
            </Col>
            <Col xl={9} md={24} >
                <OrderForm/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MenuApp;