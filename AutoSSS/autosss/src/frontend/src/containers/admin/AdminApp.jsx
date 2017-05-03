import React, { PropTypes } from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Menu, Icon, Layout } from 'antd';
import SelfStydyRoomManagerApp from './SelfStydyRoomManager/SelfStydyRoomManager.jsx'
const { Header, Footer, Sider, Content } = Layout;

class AdminApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
    }
  }

  handleClick = (e) => {
    console.log(this.props);
    this.setState({
      selectedItem: e.key,
    });
  }
  render () {
    return(
      <div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            onClick={this.handleClick}
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.selectedItem]}>
              <Menu.Item key="1">
                <Link to={`${this.props.match.url}/selfstudyroom`} style={{ textDecoration: 'none' }}>
                  <Icon type="shop" />
                  <span className="nav-text">自习室管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              Admin后台管理系统
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 700 }}>
                <Route path={`${this.props.match.url}/selfstudyroom`} component={SelfStydyRoomManagerApp} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}


export default withRouter(AdminApp);
