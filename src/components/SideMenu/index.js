import {
  DashboardOutlined,
  UserOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Menu } = require("antd");


function SideMenu() {
  const navigate = useNavigate();

  return (
    <Menu
    
      onClick={(item) => {
        //item.key 
        navigate(item.key);
      }}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '/',
          icon: <DashboardOutlined />,
          label: 'Dahsboard',
        },
        {
          key: '/users',
          icon: <UserOutlined />,
          label: 'Users',
        },
        {
          key: 'products',
          icon: <ToolOutlined />,
          label: 'Products',
        },
      ]}
    />

  );
}

export default SideMenu;
