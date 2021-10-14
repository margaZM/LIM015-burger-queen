import '../css/Nav.css';
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  LoginOutlined
} from '@ant-design/icons';

const { Item } = Menu;


function Nav() {
  return (
    <div>
      <Button type="primary">
        <MenuUnfoldOutlined />
      </Button>
      <Menu>
        <Item key="profile" icon={<img src="https://img.icons8.com/small/16/000000/user-male-circle.png"/>}>Profile</Item>
      </Menu>
      <Menu>
        <Item key="menu" icon={<img src="https://img.icons8.com/small/16/000000/restaurant-menu.png"/>}>Menu</Item>
      </Menu>
      <Menu>
        <Item key="preparing" icon={<img src="https://img.icons8.com/small/16/000000/time.png"/>}>En preparación</Item>
      </Menu>
      <Menu>
        <Item key="done" icon={<img src="https://img.icons8.com/small/16/000000/service-bell.png"/>}>Pedidos listos</Item>
      </Menu>
      <Menu>
        <Item key="delivered" icon={<img src="https://img.icons8.com/small/16/000000/checkmark.png"/>}>Despachados</Item>
      </Menu>
      <Menu>
        <Item key="logout" icon={<img src="https://img.icons8.com/small/16/000000/logout-rounded.png"/>}>Cerrar Sesión</Item>
      </Menu>
    </div>
  )
}

export default Nav;
