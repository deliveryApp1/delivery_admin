import React from "react";
import { NavLink } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined, CommentOutlined, GlobalOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { Layout as AntdLayout, Space, Tooltip, Typography, Dropdown, Menu } from "antd";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import './Header.css'

const { Header: AntdHeader } = AntdLayout;
const { Text } = Typography

type Props = {
  collapsed: boolean;
  setCollapsed: (bool: boolean) => void;
};

const Header: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  const { t, i18n } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "uz";
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  const languageMenu = (
    <Menu mode='vertical' selectedKeys={[currentLanguageCode]}
      items={[
        {
          key: 'uz',
          label: (
            "O'zbek"
          ),
          onClick: () => changeLanguage('uz')
        },
        {
          key: 'en',
          label: (
            "English"
          ),
          onClick: () => changeLanguage('en')
        },
      ]}
    />
  );

  const userMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            // <Button icon={<UserOutlined />} />
            <NavLink to="/account/settings">
              {t('menus.profile')}
            </NavLink>
          ),
          icon: <UserOutlined />
        },
        {
          key: '2',
          label: (
            // <NavLink to="/settings">
            "Sozlamalar"
            // </NavLink>
          ),
          icon: <SettingOutlined />
        },
        {
          key: '3',
          label: 'Sign out',
          // onClick: handleLogout,
          icon: <LogoutOutlined />
        },
      ]}
    />
  );

  return (
    <AntdHeader className="site-layout-background" style={{ padding: 0 }}>
      {collapsed ? (
        <MenuUnfoldOutlined style={{ fontSize: '20px', color: '#1890FF' }} onClick={() => setCollapsed(!collapsed)} />
      ) : (
        <MenuFoldOutlined style={{ fontSize: '20px', color: '#1890FF' }} onClick={() => setCollapsed(!collapsed)} />
      )}

      <div style={{ float: 'right' }}>
        <Space size='middle'>
          <Tooltip placement="bottom" title='Chat'>
            {/* <Button className='menuButton' ><NavLink to="/chat"><CommentOutlined style={{ fontSize: 18 }} /></NavLink></Button> */}
            <NavLink to="/chat" className='menuButton'><CommentOutlined style={{ fontSize: 18, color: '#fff', cursor: 'pointer' }} /></NavLink>
          </Tooltip>
          <Tooltip title={languageMenu} placement="bottom" color="#fff">
            <span className='menuButton'><GlobalOutlined style={{ fontSize: 18, color: '#fff', cursor: 'pointer' }} /></span>
          </Tooltip>
          <Dropdown overlay={userMenu} placement="bottom">
            <span style={{ marginRight: '15px', cursor: 'pointer' }} className='menuButton'>
              <UserOutlined style={{ fontSize: 18, marginRight: 5, color: '#fff' }} />
              <Text style={{ color: '#fff', fontSize: 16 }}>User</Text>
            </span>
          </Dropdown>
        </Space>
      </div>
    </AntdHeader>
  );
};

export default Header;
