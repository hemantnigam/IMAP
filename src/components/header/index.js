import {createElement} from 'react';
import {
  Layout,
  Menu,
  Avatar,
  Row,
  Col,
  Dropdown,
  Button,
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  NotificationOutlined,
  SettingOutlined,
  DownOutlined,
} from '@ant-design/icons';
import styles from './styles.module.scss';

const menu = () => {
  return (
    <Menu>
      <Menu.Item key="first">
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key="second">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item key="third">
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  )
}

function HeaderMenu({
  sidebarMenuCollapsed,
  onClick
}) {
  const {Header} = Layout;

  return (
    <Header
      className={styles.header}
      style={{
        position: "sticky",
        zIndex: 1023,
        top: 0,
      }}
    >
      <Row wrap={false} justify="space-between">
        <Col flex="none">
          <Button
            type="text"
            size="large"
            icon={
              createElement(sidebarMenuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: onClick,
              })
            }
          />
        </Col>
        <Col flex="none">
          <Row>
            <Col flex="none">
              <Button
                type="text"
                size="large"
                icon={<NotificationOutlined/>}
              />
            </Col>
            <Col flex="none">
              <Button
                type="text"
                size="large"
                icon={<SettingOutlined />}
              />
            </Col>
            <Col
              flex="none"
            >
                <Dropdown
                  overlay={menu}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar
                      size={40}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                    Kate Doe
                    <DownOutlined
                      style={{
                        marginLeft: '10px'
                      }}
                    />
                  </div>
                </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderMenu
