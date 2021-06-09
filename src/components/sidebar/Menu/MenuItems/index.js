import {
  Menu,
  Badge,
  Row,
  Col
} from 'antd';
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';

function MenuItems({
  icon,
  notificationCount,
  className,
  children,
  path,
  ...rest
}) {
  return (
    <Menu.Item
      icon={icon}
      className={styles.menu__items}
      key={path}
      {...rest}
    >
      <Link to={path}>
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
      </Link>
    </Menu.Item>
  )
}

export default MenuItems
