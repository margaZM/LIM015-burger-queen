import { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig';
import { Layout, Row, Col, Tabs } from 'antd';
import '../css/main.css'; 
import swal from 'sweetalert';
import Nav from '../components/nav.jsx';
import OrderForm from '../components/OrderForm.jsx';
import MenuCards from '../components/MenuCards.jsx';
import { querySnapshot } from '../firebase/firestore';
// import { CustomerServiceOutlined } from '@ant-design/icons';

const { Content, Header } = Layout; 
const { TabPane } = Tabs; 

function MenuApp() {
  //---------------Traer data de firebase para renderizar vista mesero     ----------------------//
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await querySnapshot(db, "products");
    return data.docs.map((doc) => ({id: doc.id, docdata : doc.data()}))
  };

  useEffect(() => {
    getProducts().then((productsArray) => setProducts(productsArray))
  }, []);

  //---------------------------Agregar un producto en resumen de pedido --------------------------//
  const [selectedProductsArray, setSelectedProductsArray] = useState([]);
  const handleAddProduct = (product) => {
    const newProduct = {
      id: product.id,
      name: product.docdata.name,
      price: product.docdata.price,
      type: product.type,
      quantity: 1
    }

    const isProductInTheArray = selectedProductsArray.some(product => product.id === newProduct.id)
    if ( isProductInTheArray ) { 
      const products = selectedProductsArray.map(product => // Iteramos en el array original y verificamos si hay duplicados
        product.id === newProduct.id ? { ...product, quantity: product.quantity + 1} : product
      )
      setSelectedProductsArray([...products])
    } else {
      setSelectedProductsArray([...selectedProductsArray, newProduct])
    }
  }

  //------------------------   Eliminar un producto del resumen del pedido -------------------------//
  const handleDeleteProduct = (product) => {
    swal({
      text: '⚡ ¿Está seguro que desea eliminar este producto? ⚡',
      icon: 'warning',
      buttons: ['No', 'Si']
    }).then(res => {
      if (res) {
        setSelectedProductsArray((selectedProductsArray) =>
        selectedProductsArray = selectedProductsArray.filter(item => item.id !== product.id ) //filtramos para que actualice el estado excluyendo este producto
      )
        swal({text: 'Producto eliminado con éxito', icon: 'success',})
      }
    })
  }

  //-----------------------Restar un producto del resumen del pedido ---------------------------/
  const handleMinusProduct = (product) => {
    product.quantity === 1 ? handleDeleteProduct(product) : 
    selectedProductsArray.map(item => item.id === product.id ? item.quantity-- :  item)  
    setSelectedProductsArray([...selectedProductsArray]);
  }

  //-----------------------Agregar un producto en el resumen del pedido ---------------------------/
  const handlePlusProduct = (product) => {
    selectedProductsArray.map(item => item.id === product.id ? item.quantity++ :  item) //filtramos para que actualice el estado excluyendo este producto
    setSelectedProductsArray([...selectedProductsArray]);
  }

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
                          (<Col xl={8} md={8} sm={12} xs={24} key={product.id} >
                            <MenuCards handleAddProduct={handleAddProduct} product={product} />
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
                        (<Col xl={8} md={8} sm={12} xs={24} key={product.id} >
                          <MenuCards  handleAddProduct={handleAddProduct} product={product} />
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
                          (<Col xl={8} md={8} sm={12} xs={24} key={product.id} >
                            <MenuCards handleAddProduct={handleAddProduct} product={product} />
                          </Col>) : false
                      )
                      }
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Col>
            <Col xl={9} md={24} sm={22} xs={24}>
                <OrderForm 
                handleDeleteProduct={handleDeleteProduct}
                handleMinusProduct={handleMinusProduct}
                handlePlusProduct={handlePlusProduct}
                selectedProductsArray={selectedProductsArray} 
                setSelectedProductsArray={setSelectedProductsArray}
                />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MenuApp;