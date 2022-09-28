import { Layout as AntdLayout, Menu } from "antd";
import { LinksType } from "components/Layout/Layout";
const { Sider } = AntdLayout;

type Props = {
  collapsed: boolean;
  links: LinksType[];
};

const SideBar: React.FC<Props> = ({ collapsed, links }) => {
  return (
    <Sider
      style={{ paddingTop: "120px" }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth="50"
    >
      <Menu theme="dark">
        {links.map(({ key, item }) => (
          <Menu.Item key={key}>{item}</Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideBar;
