import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";

import AppHeader from "./components/AppHeader/index";
import SideMenu from "./components/SideMenu/index";
import PageContent from "./components/PageContent/index";
import AppFooter from "./components/AppFooter";
import "./App.css";

const { Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="App">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <SideMenu />
        </Sider>
        <Layout className="site-layout">
          <AppHeader
            {...React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          />
          <PageContent />
          <AppFooter />
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
