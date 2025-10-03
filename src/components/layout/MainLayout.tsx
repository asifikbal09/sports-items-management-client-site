import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;
import Navbar from "./Navbar";

const items = [
  {
    key: "1",
    label: "Option 1",
  },
  {
    key: "2",
    label: "Option 2",
    children: [
      {
        key: "2-1",
        label: "Option 2-1",
      },
      {
        key: "2-2",
        label: "Option 2-2",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          className="demo-logo-vertical"
          style={{
            color: "white",
            fontWeight: "bold",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PlayTrack</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Navbar />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
