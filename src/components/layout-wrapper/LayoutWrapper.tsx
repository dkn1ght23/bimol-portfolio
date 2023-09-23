import React from "react";
import "./LayoutWrapper.scss";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import logo from "../../assets/images/baseLogo.png";
// import logo from "../../assets/images/borderLessLogo.png";
// import logo from "../../assets/images/longLogo.png";

const { Header, Content } = Layout;

const LayoutWrapper = () => {
  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(<Link to="/">Home</Link>, "1"),
    getItem(<Link to="/about">About</Link>, "2"),
    getItem(<Link to="/education">Education</Link>, "3"),
    getItem(<Link to="/experience">Experience</Link>, "4"),
    getItem(<Link to="/research-works">Research Works</Link>, "5"),
    getItem(
      <Link to="/extracurricular-activities">Extracurricular Activities</Link>,
      "6"
    ),
    getItem(<Link to="/achievements">Achievements</Link>, "7"),
    getItem(<Link to="/contact-me">Contact Me</Link>, "8"),
  ];

  return (
    <div className="layout-wrapper">
      <Layout>
        <Header
          style={{
            background: "#ffffff",
            position: "sticky",
            top: 0,
            zIndex: 1,
            height: "70px",
            width: "100%",
            borderBottom: "1px solid #E4E4E7",
          }}
        >
          <div className="menu-wrapper">
            <Menu
              expandIcon={<MenuOutlined />}
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              items={items}
              style={{
                background: "#ffffff",
                height: "70px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                fontFamily: "Calibri",
                fontSize: "16px",
                color: "#3F3F46",
              }}
            />
          </div>
        </Header>

        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default LayoutWrapper;
