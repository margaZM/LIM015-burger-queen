import { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig';
import { Layout, Row, Col, Tabs } from 'antd';
import '../css/main.css'; 
import Nav from '../components/nav.jsx';
import OrderForm from '../components/OrderForm.jsx';
import MenuCards from '../components/MenuCards.jsx';
import { querySnapshot } from '../firebase/firestore';
import { CustomerServiceOutlined } from '@ant-design/icons';

const { Content, Header } = Layout; 
const { TabPane } = Tabs; 

function MenuApp() {

  //-------------Traer data de firebase para renderizar vista mesero ------------//
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await querySnapshot(db, "products");
    return data.docs.map((doc) => ({id: doc.id, docdata : doc.data()}))
  };

  useEffect(() => {
    getProducts().then((productsArray) => setProducts(productsArray))
  }, []);


  //------Traer cada producto seleccionado para agregar en resumen de pedido ------//
  const [selectedProductsArray, setSelectedProductsArray] = useState([])

  const selectedProduct = (product) => {
    console.log(product)
    // Hacemos un nuevo objeto con el producto seleccionado
    const newProduct = {
      id: product.id,
      name: product.docdata.name,
      price: product.docdata.price,
      total: product.docdata.price,
      quantity: 1
    }
    //1.- Verificamos si existe ya en el array 
    const isProductInTheArray = selectedProductsArray.some(product => product.id === newProduct.id)
    console.log(isProductInTheArray)
    // 2.1 Si ya existe en el array actualizo la cantidad y precio total
    if ( isProductInTheArray ) { 
      const products = selectedProductsArray.map(product => {// Iteramos en el array original y verificamos si hay duplicados
        if ( product.id === newProduct.id ) { //Si el id del producto en el array es igual al que estoy intentando agregar lo actualizo
          product.quantity++;
          product.total = product.price * product.quantity;
          return product; //Retorna producto actualizado
        }
        else { //
          return product; //Retorna producto sin actualizar porque no existe
        }
      })
      setSelectedProductsArray([...products])
    } else {
      //2.2 Agrego productos al array
      setSelectedProductsArray([...selectedProductsArray, newProduct])
    }
  
    // setCartItems((prev) => {
    //   // Search the item in the array
    //   const isItemInTheCart = prev.find((i) => i.id === item.id);
    //   if (isItemInTheCart) {
    //     return prev.map((i) =>
    //       i.id === item.id ? { ...i, amount: i.amount + 1 } : i
    //     );
    //   }
    //   return [...prev, { ...item, amount: 1 }];
    // });


    // const act = selectedProductsArray.map(product => 
    //   console.log(product),
    //   product.id === newProduct.id ? 
    //   product.quantity++ && (product.price *= product.quantity)
    //   : product
    // )

    // setSelectedProductsArray([...selectedProductsArray, newProduct])
    // console.log(selectedProductsArray)
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
                          (<Col xl={8} md={8} sm={12} xs={24}>
                          <MenuCards
                          selectedProduct={selectedProduct}
                          product={product}
                          id={product.id} 
                          name={product.docdata.name} 
                          price={product.docdata.price} 
                          photo={product.docdata.photo}
                          />
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
                        <MenuCards
                        selectedProduct={selectedProduct}
                        product={product}
                        id={product.id} 
                        name={product.docdata.name} 
                        price={product.docdata.price} 
                        photo={product.docdata.photo}
                        />
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
                          <MenuCards
                          selectedProduct={selectedProduct}
                          product={product}
                          id={product.id} 
                          name={product.docdata.name} 
                          price={product.docdata.price}  
                          photo={product.docdata.photo}
                          />
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
                <OrderForm selectedProductsArray={selectedProductsArray} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MenuApp;