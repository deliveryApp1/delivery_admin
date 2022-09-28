import { HomeOutlined, ShopOutlined } from "@ant-design/icons";
import { Col, Layout as AntdLayout, Row } from "antd";
import React, { ReactNode, useMemo, useState } from "react";
import { SideBar, Header ,NavLink } from "..";

const { Content } = AntdLayout;

export type LinksType = {
  key: string;
  item: ReactNode;
};

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);



  const links: LinksType[] = useMemo(
    () => [
      {
        key: "1",
        item: (
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
        item: (
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
    ],
    []
  );

  return (
    <AntdLayout style={{ height: "100vh" }}>
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
