import { Layout, Menu } from "antd";
import { AiFillProduct } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdInventory, MdSell } from "react-icons/md";
import { RiHome3Fill } from "react-icons/ri";

const { Sider } = Layout;

const items = [
  {
    key: "Home",
    label: "Home",
    icon: <RiHome3Fill />,
  },
  {
    key: "Inventory",
    label: "Inventory",
    icon: <MdInventory />,
  },
  {
    key: "Products Management",
    label: "Products Management",
    icon: <AiFillProduct />,
    children: [
      {
        key: "Add Product",
        label: "Add Product",
      },
      {
        key: "View Products",
        label: "View Products",
      },
    ],
  },
  {
    key: "Sales",
    label: "Sales",
    icon: <MdSell />,
  },
  {
    key: "Profile",
    label: "Profile",
    icon: <FaUserAlt />,
  },
];

const Sidebar = () => {
  return (
    <Sider
      
      breakpoint="lg"
      collapsedWidth="60px"
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
  );
};
export default Sidebar;
