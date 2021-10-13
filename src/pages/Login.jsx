import { Button, Form, Input} from 'antd';
import 'antd/dist/antd.css';

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
      <div className='containerPrincipal'>
        <div className='btn-login'>
          <Button type='primary' size='large' className='btnMesero'>MESERO</Button>
          <Button type='text' className='btnCocinero'>COCINERO</Button>
        </div>
        <Form className='login-form' name='formulario' onFinish={formSucess} onFinishFailed={formFailed} layout='vertical'>
          <Item label='Nombre de usuario:'
            name='username'
            rules={[{
                required: true,
                message: 'Por favor ingresa tu nombre de usuario'
            }]}>
            <Input className='form-input'/>
          </Item>

          <Item label='Contraseña:'
            name='password'
            rules={[{
              required: true,
              message: 'Por favor ingresa tu contraseña'
            }]}>
            <Password className='form-pass' />
          </Item>

          <Item>
            <p className='text-white'>¿No te has registrado?</p>
            <a href="register" className='text-orange'>Regístrate aquí</a>
          </Item>

          <Item>
            <Button type='primary' htmlType='submit' className='btnLogin'>INICIAR SESION</Button>
          </Item>

          <Item>
            <a href="#" className='text-orange'>Olvidó su contraseña</a>
          </Item>
        </Form>
      </div>
    )
}

export default Login

