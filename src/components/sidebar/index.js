import {
  Menu,
  Layout,
} from 'antd';
import {
  HomeOutlined,
  LineChartOutlined,
  UserOutlined,
  TagOutlined,
  ShoppingCartOutlined,
  FileProtectOutlined,
  LockOutlined,
  CalendarOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import MenuItems from './Menu/MenuItems';
import styles from './styles.module.scss';

const { SubMenu } = Menu;

function Sidebar({
  trigger,
  collapsible,
  collapsed
}) {
  const { Sider } = Layout;

  return (
    <Sider
      trigger={trigger}
      collapsible={collapsible}
      collapsed={collapsed}
      width="300"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1023,
      }}
    >
      <div className={styles.logo} />
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['/']}
      >
        <MenuItems
          icon={<HomeOutlined className={styles.menu__items__icon}/>}
          notificationCount={25}
          className={styles.menu__items}
          path="/"
        >
          Dashboard
        </MenuItems>
        <Menu.ItemGroup
          title={
            <span className={styles.group__title}>
              Management
            </span>
          }
          className={styles.group}
        >
          <SubMenu
            key='/analytics'
            icon={<LineChartOutlined />}
            title="Analytics"
            path="/analytics"
          >
            <MenuItems
              path="/analytics/customers"
            >
              Customers
            </MenuItems>
            <MenuItems>
              Products
            </MenuItems>
          </SubMenu>
          <MenuItems
            icon={<UserOutlined className={styles.menu__items__icon}/>}
            notificationCount={25}
          >
            Customers
          </MenuItems>
          <MenuItems
            icon={<TagOutlined className={styles.menu__items__icon}/>}
            notificationCount={25}
          >
            Products
          </MenuItems>
          <MenuItems
            icon={<ShoppingCartOutlined className={styles.menu__items__icon}/>}
          >
            Orders
          </MenuItems>
          <MenuItems
            icon={<FileProtectOutlined className={styles.menu__items__icon}/>}
          >
            Invoices
          </MenuItems>
        </Menu.ItemGroup>
        <Menu.ItemGroup
          title={
            <span className={styles.group__title}>
              Pages
            </span>
          }
          className={styles.group}
        >
          <MenuItems
            icon={<LockOutlined className={styles.menu__items__icon}/>}
            className={styles.menu__items}
          >
            Authentication
          </MenuItems>
          <MenuItems
            icon={<CalendarOutlined className={styles.menu__items__icon}/>}
          >
            Calendar
          </MenuItems>
        </Menu.ItemGroup>
        <Menu.ItemGroup
          title={
            <span className={styles.group__title}>
              Components
            </span>
          }
          className={styles.group}
        >
          <MenuItems
            icon={<PieChartOutlined className={styles.menu__items__icon}/>}
          >
            Charts
          </MenuItems>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  )
}

export default Sidebar
