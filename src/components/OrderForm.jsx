import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import '../css/orderForm.css'
import {
  Form,
  Input,
  Select,
  Card,
  Divider,
  Button, 
  Row, 
  Col
} from 'antd';
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import { FieldValue, Timestamp, serverTimestamp } from 'firebase/firestore';
import { querySnapshot } from '../firebase/firestore';
import { db } from '../firebase/firebaseConfig'

function OrderForm(props) {
  // const objProducts = [];

  // console.log(selectedProductsArray)
  // const nuevaprueba = selectedProductsArray.filter(product => product.id)
  // // const nameProduct = selectedProductsArray.reduce((acc, current) => (acc[current.name] ? acc[current.name]  += 1 : acc[current.name] = 1, acc), [])
  // //Revisa si un producto ya está en el array
  // const exist = selectedProductsArray.some(product => product.id === selectedProductsArray.id)

  const [form] = Form.useForm();
  const { Option } = Select;

  //------------------------ Traer ordenes de firestore -------------------------//
  // const [order, setOrder] = useState([]);

  // const getOrder = async () => {
  //   // const data = await querySnapshot(db, "orders");
  //   // return data.docs.map((doc) => ({id: doc.id, docdata : doc.data()}))
  // };

  // useEffect(() => {
  //   getOrder().then((orderArray) => setOrders(orderArray))
  // }, []);

  //------------------------ Traer mesas disponibles -------------------------//



  //------------------------ Enviar una orden a firestore -------------------------//
  const selectedProductsArray = props.selectedProductsArray;
  const selectedProductsID = () => selectedProductsArray.map(product => product.id); //Array con los ID de los productos
  const total = () => selectedProductsArray.reduce((acc, current )=> acc + current.total, 0) //Total de la cuenta
  const  subTotal = Math.round(total() / 1.18).toFixed(2);
  const tax = Math.round(subTotal* 0.18).toFixed(2);

  //Leer los valores del Form 
  const onFinish = (values) => {
    const newOrderObject = { //Determinar el estatus
      client: values.clientname,
      order: selectedProductsID(),
      other: values.message,
      table: values.table,
      time: Timestamp,
    }
    console.log('Received values of form: ', newOrderObject, values);
  };

  //------------------------ Restar un producto del DOM -------------------------//
  const minusProduct = (product) => {
    console.log(product)
  }


  return (
    <div className="site-card-border-less-wrapper order-list">
      <Card title="RESUMEN DE PEDIDO" bordered={false} style={{textAlign: 'center', borderRadius: '15px' }} className='card-create-order'>
        <Form
            className='form-create-order'
            layout='vertical'
            autoComplete="off"
            form={form}
            name="createOrder"
            onFinish={onFinish}
            scrollToFirstError
            >
          <Form.Item
            style={{ width: 180}}
            name="table" // label="Cargo"
            rules={[
            {
                required: true,
                message: 'Por favor seleccione una mesa',
            },
            ]}
            >
            <Select placeholder="Mesas disponibles...">
              <Option value="mesa1">Mesa No. 01</Option>
              <Option value="mesa2">Mesa No. 02</Option>
              <Option value="mesa3">Mesa No. 03</Option>
              <Option value="mesa4">Mesa No. 04</Option>
              <Option value="mesa5">Mesa No. 05</Option>
              <Option value="mesa6">Mesa No. 06</Option>
              <Option value="mesa7">Mesa No. 07</Option>
              <Option value="mesa8">Mesa No. 08</Option>
              <Option value="mesa9">Mesa No. 09</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Nombre del cliente:" name="clientname"
            rules={[
                { required: true, 
                    message: 'Por favor, introduce tu nombre del cliente.' 
                }
            ]}
            >
            <Input
                placeholder="Introduce el nombre del cliente..."
                style={{height: '45px'}}
            />
          </Form.Item>

          <div className="order-client">
          {selectedProductsArray.length === 0 ? <h3> No hay productos agregados en la orden todavía... </h3> : null}
          {
            selectedProductsArray.map(product => {
              return (
                <Row style={{ color: 'white' }}>
                  <Col xl={12} md={12} sm={12} xs={12} className="product-name"> {product.name} </Col>
                  <Col xl={2} md={2} sm={2} xs={2} > <MinusCircleOutlined  className="product-icon" style={{ fontSize: '110%'}} onClick={() => minusProduct(product)} /> </Col>
                  <Col  xl={3} md={3} sm={3} xs={3}> {product.quantity} </Col>
                  <Col xl={2} md={2} sm={2} xs={2}> <PlusCircleOutlined className="product-icon" style={{ fontSize: '110%'}} /> </Col>
                  <Col  xl={3} md={3} sm={3} xs={3}> {'s/' + product.total} </Col>
                  <Col xl={2} md={2} sm={2} xs={2}> <DeleteOutlined className="product-icon-delete" style={{ cursor: 'pointer', fontSize: '120%'}} /> </Col>
                </Row>
              )
            }
            )
          }
          </div> 

          <Form.Item name="message" label="Nota especial para el chef:" style={{ margin: '50px'}}>
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Divider style={{ background: "white" }} />

          <div className="sub-total" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', color: "white"}}>
            <p className="title"> Sub Total</p>
            <p className="title"> {'s/' + subTotal} </p>
          </div>

          <div className="tax" style={{ display: 'flex', justifyContent: 'space-between', color: "white"}}>
            <p className="title"> Impuesto </p>
            <p className="title"> {'s/' + tax} </p>
          </div>

          <div className="total" style={{ display: 'flex', justifyContent: 'space-between', color: "white" }}>
            <p className="title"> Total </p>
            <p className="title"> {'s/' + total().toFixed(2)} </p>
          </div>

          <Form.Item >
              <Button htmlType="submit" className="form-button">
              CREAR ORDEN
              </Button>
          </Form.Item>
        </Form>  
      </Card>
    </div>
  )
}

export default OrderForm