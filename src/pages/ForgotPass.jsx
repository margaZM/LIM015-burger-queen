import '../css/main.css';
import '../css/Responsive.css';
import swal from 'sweetalert';
import {
  Button, Form, Input,
} from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined } from '@ant-design/icons';
import { auth } from '../firebase/firebaseConfig';
import { resetPassword } from '../firebase/auth.js';

const { Item } = Form;

const sendEmail = (data) => {
  // console.log(data.username);
  resetPassword(data.username)
    .then((pass)=>console.log(pass))
    .catch((err) => console.log(err))
}

const notSendEmail = (error) => {
  error.errorFields.map(e => swal('Hola!', e.errors[0]));
}

function ForgotPass() {
  return (
    <div classNAme='ant-row form-container'>
      <div className="img-burger"></div>
      <Form
        className="form ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-18 ant-col-xl-11"
        name='formulario'
        onFinish={sendEmail}
        onFinishFailed={notSendEmail}
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
        <Item>
          <Button htmlType='submit' className='form-button'>ENVIAR</Button>
        </Item>
      </Form>
    </div>
  )
}

export default ForgotPass;
