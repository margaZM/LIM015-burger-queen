import 'antd/dist/antd.css';
import '../css/orderForm.css'
import {
  Form,
  Input,
  Select,
  Card,
  Divider,
  Button
} from 'antd';



function OrderForm() {

  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

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
              <Option value="01">Mesa No. 01</Option>
              <Option value="02">Mesa No. 02</Option>
              <Option value="03">Mesa No. 03</Option>
              <Option value="04">Mesa No. 04</Option>
              <Option value="05">Mesa No. 05</Option>
              <Option value="06">Mesa No. 06</Option>
              <Option value="07">Mesa No. 07</Option>
              <Option value="08">Mesa No. 08</Option>
              <Option value="09">Mesa No. 09</Option>
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

          <div className="order-client" style={{ width: 100, height:100 }}> </div>

          <Form.Item name="message" label="Nota especial para el chef:" style={{ margin: '50px'}}>
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Divider style={{ background: "white" }} />

          <div className="sub-total" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', color: "white"}}>
            <p className="title"> Sub Total</p>
            <p className="title"> s/ 8.75</p>
          </div>

          <div className="tax" style={{ display: 'flex', justifyContent: 'space-between', color: "white"}}>
            <p className="title"> Impuesto </p>
            <p className="title"> s/ 1.25 </p>
          </div>

          <div className="total" style={{ display: 'flex', justifyContent: 'space-between', color: "white" }}>
            <p className="title"> Total </p>
            <p className="title"> 15.00 </p>
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