import {
  Menu,
  Badge,
  Row,
  Col
} from 'antd';
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';


function MenuItem({
  notificationCount,
  children,
  path,
  ...rest
}) {
  return (
    <Menu.Item
      className={styles.menu__items}
      {...rest}
    >
      {
        path ? (
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
          ) : (
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
          )
      }
    </Menu.Item>
  )
}

export default MenuItem
