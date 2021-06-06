import {createElement} from 'react';
import {
  Layout
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import styles from './styles.module.scss';

function HeaderMenu({
  sidebarMenuCollapsed,
  onClick
}) {
  const {Header} = Layout;

  return (
    <Header
      className={styles.header}
    >
      {createElement(sidebarMenuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: onClick,
      })}
    </Header>
  )
}

export default HeaderMenu
