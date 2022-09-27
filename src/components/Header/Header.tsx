import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout as AntdLayout } from "antd";

const { Header: AntdHeader } = AntdLayout;

type Props = {
  collapsed: boolean;
  setCollapsed: (bool: boolean) => void;
};

const Header: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  return (
    <AntdHeader className="site-layout-background" style={{ padding: 0 }}>
      {collapsed ? (
        <MenuUnfoldOutlined style={{ fontSize: '20px', color: '#1890FF' }}  onClick={() => setCollapsed(!collapsed)} />
      ) : (
        <MenuFoldOutlined style={{ fontSize: '20px', color: '#1890FF' }}  onClick={() => setCollapsed(!collapsed)} />
      )}
    </AntdHeader>
  );
};

export default Header;
