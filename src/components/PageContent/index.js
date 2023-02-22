import { theme } from "antd";
import { Content } from "antd/es/layout/layout";
import AppRoutes from "../AppRoutes";

function PageContent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content style={{ margin: "2px 0px 0px 0px" }}>
      <div
        style={{ padding: 5, minHeight: 20, background: colorBgContainer }}
      >
        <AppRoutes />
      </div>
    </Content>
  );
}

export default PageContent;
