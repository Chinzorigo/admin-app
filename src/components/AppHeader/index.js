import React from 'react';
import { Layout, theme } from 'antd';
import Typography from 'antd/es/typography/Typography';

const { Header } = Layout;


function AppHeader() {
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header className='AppHeader'
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Typography.Title>Admin Panel</Typography.Title>
      </Header>
    )
}

export default AppHeader;