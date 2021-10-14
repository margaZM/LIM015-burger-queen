import '../css/main.css';
import '../css/Responsive.css';
import {
  Button, Form, Input,
  Row, Col, Divider
} from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';

const { Item } = Form;
const { Password } = Input;

const formSucess = (datos) => {
  console.log('formulario enviado correctamente', datos);
};

const formFailed = (error) => {
  console.log('Error:', error);
}

function Login() {
  return (
    <div classNAme='ant-row form-container'>
      <div className="img-burger"></div>
      <div className='btn-login ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-24'>
        <Button type='text' size='large' className='btnJob'>MESERO</Button>
        <Button type='text' size='large' className='btnJob'>COCINERO</Button>
      </div>
      <div className="ant-col-xl-3"> </div>
      <Form
        className="form ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-18 ant-col-xl-11"
        name='formulario'
        onFinish={formSucess}
        onFinishFailed={formFailed}
        layout='vertical'>
        <Item label='Correo electrónico:'
          name='username'
          rules={[{
            required: true,
            message: 'Por favor ingresa tu correo electrónico'
          }]}>
          <Input
            prefix={<MailOutlined />}
            placeholder="Introduce tu correo electrónico"
          />
        </Item>

        <Item label='Contraseña:'
          name='password'
          rules={[{
            required: true,
            message: 'Por favor ingresa tu contraseña'
          }]}>
          <Password
            prefix={<KeyOutlined />}
            placeholder="Introduce tu contraseña"
          />
        </Item>

        <Item>
          <p className='text-white'>¿No te has registrado?</p>
          <a href="register" className='text-orange'>Regístrate aquí</a>
        </Item>

        <Item>
          <Button htmlType='submit' className='form-button'>INICIAR SESION</Button>
        </Item>

        <Item>
          <a href="#" className='text-orange'>¿Olvidó su contraseña?</a>
        </Item>
      </Form>
    </div>
    )
}

export default Login

