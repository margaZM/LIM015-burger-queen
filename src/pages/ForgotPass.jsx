// import '../css/main.css';
import '../css/ForgotPass.css';
import '../css/Responsive.css';
import swal from 'sweetalert';
import {
  Button, Form, Input,
} from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined } from '@ant-design/icons';
import { auth } from '../firebase/firebaseConfig';
import { resetPassword } from '../firebase/auth.js';
import avatar from '../images/forgotPassAvatar.svg';

const { Item } = Form;

const sendEmail = (data) => {
  resetPassword(auth, data.username)
    .then(() => {
      swal("Bien!", "¡Se envió un correo electrónico para restablecer la contraseña!", "ok");
      swal({
        title: "Bien!",
        text: "¡Se envió un correo electrónico para restablecer la contraseña!",
        icon: "success",
        button: "ok",
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      switch (errorCode) {
        case 'auth/user-not-found':
          swal({
            title: "Error!",
            text: "⚡ Usuario no encontrado ⚡",
            icon: "error",
            button: "ok",
          });
          break;
        default:
          swal("ERROR!", errorMessage);
      }
    });
}

const notSendEmail = (error) => {
  error.errorFields.map(e => swal('Hola!', e.errors[0]));
}

function ForgotPass() {
  return (
    <div className='ant-row form-container forgot-pass'>
      <div className="img-burger"></div>
      <Form
        className="form ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-18 ant-col-xl-11 forgot-pass"
        name='formulario'
        onFinish={sendEmail}
        onFinishFailed={notSendEmail}
        layout='vertical'>
        <Item>
          <div className='avatar-container'>
            <img src={avatar} alt={avatar} />
          </div>
        </Item>
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
