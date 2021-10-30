import '../css/main.css';
import '../css/Responsive.css';
import swal from 'sweetalert';
import { Button, Form, Input } from 'antd';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';
import { auth } from '../firebase/firebaseConfig';
import { loginUser } from '../firebase/auth.js';

const { Item } = Form;
const { Password } = Input;

const formSucess = (datos) => {


  loginUser(auth, datos.username, datos.password)

   .then((userCredential) => {
     if (userCredential.user.emailVerified) {
      localStorage.setItem('email', datos.username);
       window.location.pathname = '/profile';
       swal({
         title: "Bien!",
         text: "Has iniciado sesión correctamente!",
         icon: "success",
         button: "ok",
       });
       if (userCredential.user.job === 'mesero') {

       }
     } else {
       swal({
         title: "Hola!",
         text: "Confirma el mail que te hemos enviado",
         icon: "warning",
         button: "ok",
       });
     }
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     switch (errorCode) {
       case 'auth/wrong-password':
         swal({
           title: "ERROR!",
           text: "⚡ La contraseña es incorrecta ⚡",
           icon: "error",
           button: "ok",
         });
         break;
       case 'auth/invalid-email':
         swal({
           title: "ERROR!",
           text: "⚡ El correo ingresado no es válido ⚡",
           icon: "error",
           button: "ok",
         });
         break;
       case 'auth/user-not-found':
         swal({
           title: "ERROR!",
           text: "⚡ Usuario y/o contraseña incorrecta ⚡",
           icon: "error",
           button: "ok",
         });
         break;
       case 'auth/email-already-in-use':
         swal({
           title: "ERROR!",
           text: "⚡ La dirección de correo electrónico ya esta en uso ⚡",
           icon: "error",
           button: "ok",
         });
         break;
       case 'auth/too-many-requests':
         swal({
           title: "ERROR!",
           text: "⚡ Superó su numero de intentos permitidos, vuelva a intentarlo luego ⚡",
           icon: "error",
           button: "ok",
         });
         break;
       default:
         swal({
           title: "ERROR!",
           text: errorMessage,
           icon: "error",
           button: "ok",
         });
     }
   });
};

function Login() {

  return (
    // ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-11
    <div className='ant-row form-container form-login'>
      <div className="img-burger"></div>
      <div className="ant-col-xl-3"> </div>
      <Form
        autoComplete="off"
        className="form ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-18 ant-col-xl-11"
        name='formulario'
        onFinish={formSucess}
        layout='vertical'>
        {/* <Item         
          name="btn-job"
          // label="Radio.Button"
          rules={[
          {
            required: true,
            message: 'Por favor seleccione su cargo',
          },
          ]}
          >
            <Radio.Group buttonStyle="solid" className='btn-login'>
              <Radio.Button value="mesero">MESERO</Radio.Button>
              <Radio.Button value="cocinero">COCINERO</Radio.Button>
            </Radio.Group>
        </Item> */}
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

