import { theme } from "antd";
import { Content } from "antd/es/layout/layout";
import AppRoutes from "../AppRoutes";

function PageContent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content style={{ margin: "6px 6px 0 6px" }}>
      <div
        style={{ padding: 10, minHeight: 800, background: colorBgContainer }}
      >
        <AppRoutes />
      </div>
    </Content>
  );
}

export default PageContent;
