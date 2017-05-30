import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Menu, Icon, Layout } from 'antd';
import SelfStydyRoomManagerApp from './SelfStydyRoomManager/SelfStydyRoomManager.jsx';
import NoticeApp from './NoticeManager/NoticeApp.jsx';
import AdminHead from '../../components/header/AdminHead';
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
                <Icon type="upload" />
                <span className="nav-text">管理员首页</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={`${this.props.match.url}/selfstudyroom`} style={{ textDecoration: 'none' }}>
                  <Icon type="shop" />
                  <span className="nav-text">自习室管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="video-camera" />
                <span className="nav-text">用户管理</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={`${this.props.match.url}/notice`} style={{ textDecoration: 'none' }}>
                  <Icon type="upload" />
                  <span className="nav-text">公告管理</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <AdminHead />
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 700 }}>
                <Route path={`${this.props.match.url}/selfstudyroom`} component={SelfStydyRoomManagerApp} />
                <Route path={`${this.props.match.url}/notice`} component={NoticeApp} />
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
