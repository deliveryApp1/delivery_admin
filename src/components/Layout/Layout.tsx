import React, { useState, ReactNode, useMemo } from 'react';
import { SideBar, Header } from "..";
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';
import { HomeOutlined, ShopOutlined, AppstoreOutlined, UserOutlined, UnorderedListOutlined } from '@ant-design/icons';
export type LinksType = {
  key: string;
  label: ReactNode;
};
const { Content, } = Layout;

const MainLayout: React.FC = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(true);

  const links: LinksType[] = useMemo(
    () => [
      {
        key: "/",
        label: (
          <Link to={"/"}>
            {t('menus.home')}
          </Link>
        ),
        icon: <HomeOutlined />
      },
      {
        key: "/category",
        label: (
          <Link to={"/category"}>
            {t('menus.categories')}
          </Link>
        ),
        icon: <ShopOutlined />
      },
      {
        key: "/products",
        label: (
          <Link to={"/products"}>
            {t('menus.products')}
          </Link>
        ),
        icon: <AppstoreOutlined />
      },
      {
        key: "/discount",
        label: (
          <Link to={"/discount"}>
            {t('menus.discount')}
          </Link>
        ),
        icon: <ShopOutlined />
      },
      {
        key: "/orders",
        label: (
          <Link to={"/orders"}>
            {t('menus.orders')}
          </Link>
        ),
        icon: <UnorderedListOutlined />
      },
      {
        key: "/users",
        label: (
          <Link to={"/users"}>
            {t('menus.users')}
          </Link>
        ),
        icon: <UserOutlined />
      }
    ],
    [t]
  );
  console.log("location: ", location)

  return (
    <Layout style={{ height: "100vh", overflow: 'hidden' }}>
      <SideBar links={links} collapsed={collapsed} location={location} />
      <Layout className='main-laydisplay: flex; justify-content: space-between;out-app'>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            padding: 24, overflow: 'auto',
            height: '100vh'
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

