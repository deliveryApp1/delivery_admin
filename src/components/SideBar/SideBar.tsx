import { Layout as AntdLayout, Menu } from "antd";
import { LinksType } from "components/Layout/Layout";
const { Sider } = AntdLayout;

type Props = {
  collapsed: boolean;
  links: LinksType[]
};


const SideBar: React.FC<Props> = ({ collapsed,links }) => {
  return (
    <Sider style={{paddingTop: '120px'}} trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={links}
      />
    </Sider>
  );
};

export default SideBar;
