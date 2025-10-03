import { Button, Image, Layout } from "antd";
import { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import image from "../../assets/Md_Asif_Ikbal.jpeg"

const { Header} = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
    const handleToggle = () => {
      setCollapsed(!collapsed);
    };
  return (
    <Header
          style={{
            padding: 0,
            backgroundColor: "#001529",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "1rem",
          }}
        >
          <h3
            style={{
              color: "white",
              display: "inline-block",
              marginRight: "1rem",
              fontSize: "1.2rem",
            }}
          >
            Dashboard
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {collapsed ? (
              <IoMoon
                onClick={handleToggle}
                style={{
                  fontSize: "25px",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "50%",
                  padding: "4px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <IoSunny
                onClick={handleToggle}
                style={{
                  fontSize: "25px",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "50%",
                  padding: "4px",
                  cursor: "pointer",
                }}
              />
            )}
            <p
              style={{
                color: "white",
                margin: 0,
                fontSize: "16px",
                fontWeight: "semibold",
              }}
            >
              MD Asif Ikbal
            </p>
            <Image
              src={image}
              alt="Profile"
              style={{ borderRadius: "50%", width: "40px", height: "40px" }}
            />

            <Button type="primary">Sign Out</Button>
          </div>
        </Header>
  )
};
export default Navbar;