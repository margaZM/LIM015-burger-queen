import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Button, Layout } from 'antd';
import { filterQuery } from '../firebase/firestore'
import { getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
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

const Nav = () => {
  const [ collapsed, setCollapsed ] = useState(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  const onCollapse = (collapsed) => setCollapsed(!collapsed);

  //**************** Verificamos el cargo del trabajador ******************/
  const [job, setJob] = useState('');

  const email = localStorage.getItem('email');

  const getUser = async () => {
    const queryUser = filterQuery(db, "user", 'email','==', email);
    const dataUser = await getDocs(queryUser);
    return dataUser.docs.map((doc) => ({id: doc.id, job : doc.data().job}))
  };
  
  getUser().then((res) => setJob(res[0].job));
  // console.log(job)

  //**************** cerrar sesión y volver a home ******************/
  const logout = () => {
    console.log('me hiciste click');
    localStorage.clear();
    console.log('borre el localStorage');
    window.location.pathname = '/';
  }

return (
    <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ height: '100vh'}}>
        <Button
        className="btn-sider"
        type="primary"
        onClick={toggleCollapsed} 
        >
        {collapsed ? <MenuFoldOutlined style={{ fontSize: '200%'}}/> : <MenuUnfoldOutlined style={{ fontSize: '200%'}}/>}
        </Button>

        <Menu
          style={{ textAlign: "center", background: "#585858"}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          >
          <Menu.Item key="1" icon={<UserOutlined style={{ fontSize: '200%'}} /> }>   <Link to="/profile"> Perfil </Link>  </Menu.Item>

          { job === 'mesero'? <Menu.Item key="2" icon={<BarsOutlined style={{ fontSize: '200%'}} />}> <Link to="/menu"> Menu </Link>  </Menu.Item> : null}

          { job !== 'mesero'? <Menu.Item key="3" icon={<FieldTimeOutlined style={{ fontSize: '200%'}} />}>  <Link to="/preparing"> Preparando </Link>  </Menu.Item> : null}

          { job === 'mesero'? <Menu.Item key="4" icon={<AlertOutlined style={{ fontSize: '200%'}} />}> <Link to="/done"> Listos </Link> </Menu.Item> : null}

          <Menu.Item key="5" icon={<CarryOutOutlined style={{ fontSize: '200%'}} />}> <Link to="/delivered"> Despachados </Link></Menu.Item>

          <Menu.Item key="6" onClick={logout} icon={<PoweroffOutlined style={{ fontSize: '200%'}} />}> Salir </Menu.Item>
        </Menu>
  </Sider> 
)}

export default Nav;

