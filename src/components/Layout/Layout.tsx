import { HomeOutlined, ShopOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Col, Layout as AntdLayout, Row } from "antd";
import React, { ReactNode, useMemo, useState } from "react";
import { SideBar, Header, NavLink } from "..";

const { Content } = AntdLayout;

export type LinksType = {
  key: string;
  label: ReactNode;
};

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const links: LinksType[] = useMemo(
    () => [
      {
        key: "1",
        label: (
          <NavLink to={"/"}>
            <Row align="middle" wrap={false} gutter={20}>
              <Col>
                <HomeOutlined />
              </Col>
              <Col>Home</Col>
            </Row>
          </NavLink>
        ),
      },
      {
        key: "2",
        label: (
          <NavLink to={"/category"}>
            <Row align="middle" wrap={false} gutter={20}>
              <Col>
                <ShopOutlined />
              </Col>
              <Col>Kategoriya</Col>
            </Row>
          </NavLink>
        ),
      },
      {
        key: "3",
        label: (
          <NavLink to={"/products"}>
            <Row align="middle" wrap={false} gutter={20}>
              <Col>
                <AppstoreOutlined />
              </Col>
              <Col>Mahsulotlar</Col>
            </Row>
          </NavLink>
        ),
      },
    ],
    []
  );

  return (
    <AntdLayout style={{ height: "100vh", overflow: 'hidden' }}>
      <SideBar links={links} collapsed={collapsed} />
      <AntdLayout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
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
