import { HomeOutlined, ShopOutlined, AppstoreOutlined, UserOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Col, Layout as AntdLayout, Row } from "antd";
import { useTranslation } from 'react-i18next';
import React, { ReactNode, useMemo, useState } from "react";
import { SideBar, Header, NavLink } from "..";
import './Layout.css'

const { Content } = AntdLayout;

export type LinksType = {
  key: string;
  label: ReactNode;
};

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation()
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
              <Col>{t('menus.home')}</Col>
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
              <Col>{t('menus.categories')}</Col>
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
              <Col>{t('menus.products')}</Col>
            </Row>
          </NavLink>
        )
      },
      {
        key: "4",
        label: (
          <NavLink to={"/discount"}>
            <Row align="middle" wrap={false} gutter={20}>
              <Col>
                <ShopOutlined />
              </Col>
              <Col>{t('menus.discount')}</Col>
            </Row>
          </NavLink>
        )
      },
      {
        key: "5",
        label: (
          <NavLink to={"/orders"}>
            <Row align="middle" wrap={false} gutter={20}>
              <Col>
                <UnorderedListOutlined />
              </Col>
              <Col>{t('menus.orders')}</Col>
            </Row>
          </NavLink>
        )
      },
      {
        key: "6",
        label: (
          <NavLink to={"/users"}>
            <Row align="middle" wrap={false} gutter={20}>
              <Col>
                <UserOutlined />
              </Col>
              <Col>{t('menus.users')}</Col>
            </Row>
          </NavLink>
        ),
      }
    ],
    [t]
  );

  return (
    <AntdLayout style={{ height: "100vh", overflow: 'hidden' }}>
      <SideBar links={links} collapsed={collapsed} />
      <AntdLayout className='main-laydisplay: flex; justify-content: space-between;out-app'>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            padding: 24, overflow: 'auto',
            height: '100vh'
          }}
        >
          {children}
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
