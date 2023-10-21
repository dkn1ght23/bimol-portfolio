import React from "react";
import "./LayoutWrapper.scss";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useGetMenuSelectedKey from "../../hooks/useGetMenuKey";

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
  const selectedKey = useGetMenuSelectedKey();

  const items: MenuItem[] = [
    getItem(<Link to="/">Home</Link>, ""),
    getItem(<Link to="/about">About</Link>, "about"),
    getItem(<Link to="/education">Education</Link>, "education"),
    getItem(<Link to="/experience">Experience</Link>, "experience"),
    getItem(<Link to="/research-works">Research Works</Link>, "research-works"),
    getItem(
      <Link to="/extracurricular-activities">Extracurricular Activities</Link>,
      "extracurricular-activities"
    ),
    getItem(<Link to="/achievements">Achievements</Link>, "achievements"),
    getItem(<Link to="/contact-me">Contact Me</Link>, "contact-me"),
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
              defaultSelectedKeys={[""]}
              defaultOpenKeys={[]}
              selectedKeys={selectedKey}
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
