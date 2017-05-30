import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class UserHeader extends React.Component {
  handleClick = (e) => {
    console.log(e);
  }

  render () {
    return(
      <div>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          mode="horizontal"
        >
          <Menu.Item key='shouye'>
            <Link to={`${this.props.match.url}/`} style={{ textDecoration: 'none' }}>
              <Icon type="home" />首页
            </Link>
          </Menu.Item>
          <Menu.Item key='zixishi'>
            <Link to={`${this.props.match.url}/studyroom`} style={{ textDecoration: 'none' }}>
              <Icon type="cloud-o" />自习室
            </Link>
          </Menu.Item>
          <Menu.Item key='yuyuexuanzuo'>
            <Link to={`${this.props.match.url}/book`} style={{ textDecoration: 'none' }}>
              <Icon type="contacts" />预约选座
            </Link>
          </Menu.Item>
          <Menu.SubMenu title={<span><Icon type="setting" />你好！ {this.props.username}</span>}>
            <Menu.ItemGroup>
              <Menu.Item key='1'>个人设置</Menu.Item>
              <Menu.Item key='2'>我的预约</Menu.Item>
              <Menu.Item key='3'><Link to={"/"}>登出</Link></Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(UserHeader);
