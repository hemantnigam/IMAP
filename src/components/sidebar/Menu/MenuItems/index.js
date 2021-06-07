import {
  Menu,
  Badge,
  Row,
  Col
} from 'antd';
import styles from './styles.module.scss';

function MenuItems({
  icon,
  notificationCount,
  className,
  children,
  ...rest
}) {
  return (
    <Menu.Item
      icon={icon}
      className={styles.menu__items}
      {...rest}
    >
      <Row wrap={false} justify="space-between">
        <Col flex="none">
          {children}
        </Col>
        {
          notificationCount && (
            <Col flex="none">
              <Badge
                count={notificationCount}
                style={{ boxShadow: 'none' }}
              />
            </Col>
          )
        }
      </Row>
    </Menu.Item>
  )
}

export default MenuItems
