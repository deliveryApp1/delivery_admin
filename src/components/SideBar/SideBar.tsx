import { Layout as AntdLayout, Menu } from "antd";
import { LinksType } from "components/Layout/Layout";
const { Sider } = AntdLayout;

type Props = {
  collapsed: boolean;
  links: LinksType[];
  location: any
};

const SideBar: React.FC<Props> = ({ collapsed, links, location }) => {
  return (
    <Sider
      style={{ paddingTop: "120px" }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth="50"
    >
      <Menu
        theme="dark"
        items={links}
        defaultSelectedKeys={[location.pathname]}
        selectedKeys={location.pathname}
        onSelect={e => console.log("log clicked: ", e)}
      />
    </Sider>
  );
};

export default SideBar;
