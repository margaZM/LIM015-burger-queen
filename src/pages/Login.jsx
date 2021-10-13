import { Button, Form, Input} from 'antd';
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
      <div className='containerPrincipal'>
        <div className='btn-login'>
          <Button type='text' size='large' className='btnJob'>MESERO</Button>
          <Button type='text' size='large' className='btnJob'>COCINERO</Button>
        </div>
        <Form className='login-form' name='formulario' onFinish={formSucess} onFinishFailed={formFailed} layout='vertical'>
          <Item label='Correo electrónico:'
            name='username'
            rules={[{
                required: true,
                message: 'Por favor ingresa tu correo electrónico'
            }]}>
            <Input className='form-input'
             prefix={ <MailOutlined/> }
             placeholder="Introduce tu correo electrónico"
            />
          </Item>

          <Item label='Contraseña:'
            name='password'
            rules={[{
              required: true,
              message: 'Por favor ingresa tu contraseña'
            }]}>
            <Password className='form-pass' 
            prefix={ <KeyOutlined/> }
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

