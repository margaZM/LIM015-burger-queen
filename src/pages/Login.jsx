import '../css/main.css';
import '../css/Responsive.css';
import swal from 'sweetalert';
import {
  Button, Form, Input,
} from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';
import { auth } from '../firebase/firebaseConfig';
import { loginUser } from '../firebase/auth.js';

const { Item } = Form;
const { Password } = Input;

const formSucess = (datos) => {
  loginUser(auth, datos.username, datos.password)
    .then((userCredential) => {
      if (userCredential.user.emailVerified) {
        swal({
          title: "Bien!",
          text: "Has iniciado sesión correctamente!",
          icon: "success",
          button: "ok",
        });
        window.location.pathname = '/profile';
      } else {
        swal('Confirma el mail que te hemos enviado');
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/wrong-password':
          swal("ERROR!", '⚡ La contraseña es incorrecta ⚡');
          break;
        case 'auth/invalid-email':
          swal("ERROR!", '⚡ El correo ingresado no es válido ⚡');
          break;
        case 'auth/user-not-found':
          swal("ERROR!", '⚡ Usuario y/o contraseña incorrecta ⚡');
          break;
        case 'auth/email-already-in-use':
          swal("ERROR!", '⚡ La dirección de correo electrónico ya esta en uso⚡');
          break;
        case 'auth/too-many-requests':
          swal("ERROR!", '⚡ Superó su numero de intentos permitidos, vuelva a intentarlo luego ⚡');
          break;
        default:
          swal("ERROR!", errorMessage);
      }
    });
};

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
          <a href="forgotpass" className='text-orange'>¿Olvidó su contraseña?</a>
        </Item>
      </Form>
    </div>
  )
}

export default Login;

