import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Button, Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PoweroffOutlined,
  FieldTimeOutlined,
  CarryOutOutlined,
  AlertOutlined,
  BarsOutlined
} from '@ant-design/icons';
import '../css/Nav.css';

const { Sider } = Layout;

const Nav = (props) => {
  const [ collapsed, setCollapsed ] = useState(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  const onCollapse = (collapsed) => setCollapsed(!collapsed);

return (
  <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse} >

      <Button
      className="btn-sider"
      type="primary"
      onClick={toggleCollapsed} 
      >
      {collapsed ? <MenuFoldOutlined style={{ fontSize: '200%'}}/> : <MenuUnfoldOutlined style={{ fontSize: '200%'}}/>}
      </Button>

      <Menu
        style={{ textAlign: "center", background: "#211D2B"}}
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        >
        <Menu.Item key="1" icon={<UserOutlined style={{ fontSize: '200%'}} /> }>   <Link to="/profile"> Perfil </Link>  </Menu.Item>

        <Menu.Item key="2" icon={<BarsOutlined style={{ fontSize: '200%'}} />}> <Link to="/menu"> Menu </Link>  </Menu.Item>

        <Menu.Item key="3" icon={<FieldTimeOutlined style={{ fontSize: '200%'}} />}>  <Link to="/preparing"> Preparando </Link>  </Menu.Item>

        <Menu.Item key="4" icon={<AlertOutlined style={{ fontSize: '200%'}} />}> <Link to="/done"> Listos </Link> </Menu.Item>

        <Menu.Item key="5" icon={<CarryOutOutlined style={{ fontSize: '200%'}} />}> <Link to="/delivered"> Despachados </Link></Menu.Item>

        <Menu.Item key="6" icon={<PoweroffOutlined style={{ fontSize: '200%'}} />}> Salir </Menu.Item>
      </Menu>
</Sider> 
)}

export default Nav;

