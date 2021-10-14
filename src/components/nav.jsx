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
} from '@ant-design/icons';

const { SubMenu } = Menu;


function Nav() {
  return (
    <div>
      <Button>
        <MenuUnfoldOutlined />
      </Button>
    </div>
  )
}

export default Nav;
