import { HomeOutlined, ShopOutlined } from "@ant-design/icons";
import { Layout as AntdLayout } from "antd";
import React, { ReactNode, useMemo, useState } from "react";
import { SideBar, Header } from "..";
import { Link } from "react-router-dom";

const { Content } = AntdLayout;

export type LinksType = {
  key: string;
  icon: ReactNode;
  label: string;
};

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  const links: LinksType[] = useMemo(
    () => [
      {
        key: "1",
        icon: (
          <Link to={"/"}>
            <HomeOutlined />
          </Link>
        ),
        label: "Home",
      },
      {
        key: "2",
        icon: (
          <Link to={"/category"}>
            <ShopOutlined />
          </Link>
        ),
        label: "Categoriya",
      },
    ],
    []
  );

  return (
    <AntdLayout style={{ height: "100vh" }}>
      <SideBar links={links} collapsed={collapsed} />
      <AntdLayout className="site-layout">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {children}
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
