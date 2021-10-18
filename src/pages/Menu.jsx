import { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig';
import { Layout, Row, Col, Tabs } from 'antd';
import '../css/main.css'; 
import Nav from '../components/nav.jsx';
import OrderForm from '../components/OrderForm.jsx';
import MenuCards from '../components/MenuCards.jsx'
import { querySnapshot } from '../firebase/firestore'

const { Content, Header } = Layout; 
const { TabPane } = Tabs; 

function MenuApp() {

    const [products, setProducts] = useState([]);
    // const arrayData = [];
    
    const getProducts = async () => {
      const data = await querySnapshot(db, "products");
      return data.docs.map((doc) => ({id: doc.id, docdata : doc.data()}))
    };

    useEffect(() => {
      getProducts().then((productsArray) => setProducts(productsArray))
    }, []);
    console.log(products)

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
                      {
                      products.map(product =>
                        product.docdata.category === 'breakfast' ?
                          (<Col xl={8} md={8} sm={12} xs={24}>
                          <MenuCards key= {product.id} name={product.docdata.name} price={product.docdata.price} photo={product.docdata.photo}/>
                          </Col>) : false
                      )
                      }
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Almuerzos" key="2" >
                <Row>
                    <Col xl={24} md={24}>
                      <Row gutter={[16, 8]}> 
                      {
                      products.map(product =>
                        product.docdata.category !== 'breakfast' && product.docdata.category !== 'additional'?
                          (<Col xl={8} md={8} sm={12} xs={24}>
                          <MenuCards key= {product.id} name={product.docdata.name} price={product.docdata.price}  photo={product.docdata.photo}/>
                          </Col>) : false
                      )
                      }
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Extras" key="3" >
                <Row>
                    <Col xl={24} md={24}>
                      <Row gutter={[16, 8]}> 
                      {
                      products.map(product =>
                        product.docdata.category === 'additional'?
                          (<Col xl={8} md={8} sm={12} xs={24}>
                          <MenuCards key= {product.id} name={product.docdata.name} price={product.docdata.price}  photo={product.docdata.photo}/>
                          </Col>) : false
                      )
                      }
                      </Row>
                    </Col>
                  </Row>
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