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
import { useLocation } from 'react-router-dom';
import MenuItem from './Menu/MenuItems';
import styles from './styles.module.scss';

const { SubMenu } = Menu;

function Sidebar({
  trigger,
  collapsible,
  collapsed
}) {
  const { Sider } = Layout;
  let location = useLocation();
  
  const currentSubMenu = [location.pathname.includes('/analytics') && '/analytics'];
  
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
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={currentSubMenu}
      >
        <MenuItem
          icon={<HomeOutlined className={styles.menu__items__icon}/>}
          notificationCount={25}
          className={styles.menu__items}
          key="/"
          path="/"
        >
          Dashboard
        </MenuItem>
        <Menu.ItemGroup
          title={!collapsed &&
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
          >
            <MenuItem
              key="/analytics/customers"
              path="/analytics/customers"
            >
              Customers
            </MenuItem>
            <MenuItem
              key="/analytics/products"
              path="/analytics/products"
            >
              Products
            </MenuItem>
          </SubMenu>
          <MenuItem
            icon={<UserOutlined className={styles.menu__items__icon}/>}
            notificationCount={25}
            key="/customers"
            path="/customers"
          >
            Customers
          </MenuItem>
          <MenuItem
            icon={<TagOutlined className={styles.menu__items__icon}/>}
            notificationCount={25}
            key="/products"
            path="/products"
          >
            Products
          </MenuItem>
          <MenuItem
            icon={<ShoppingCartOutlined className={styles.menu__items__icon}/>}
            key="/orders"
            path="/orders"
          >
            Orders
          </MenuItem>
          <MenuItem
            icon={<FileProtectOutlined className={styles.menu__items__icon}/>}
            key="/invoices"
            path="/invoices"
          >
            Invoices
          </MenuItem>
        </Menu.ItemGroup>
        <Menu.ItemGroup
          title={!collapsed &&
            <span className={styles.group__title}>
              Pages
            </span>
          }
          className={styles.group}
        >
          <MenuItem
            icon={<LockOutlined className={styles.menu__items__icon}/>}
            className={styles.menu__items}
            key="/authentication"
            path="/authentication"
          >
            Authentication
          </MenuItem>
          <MenuItem
            icon={<CalendarOutlined className={styles.menu__items__icon}/>}
            key="/calendar"
            path="/calendar"
          >
            Calendar
          </MenuItem>
        </Menu.ItemGroup>
        <Menu.ItemGroup
          title={!collapsed &&
            <span className={styles.group__title}>
              Components
            </span>
          }
          className={styles.group}
        >
          <MenuItem
            icon={<PieChartOutlined className={styles.menu__items__icon}/>}
            key="/charts"
            path="/charts"
          >
            Charts
          </MenuItem>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  )
}

export default Sidebar
