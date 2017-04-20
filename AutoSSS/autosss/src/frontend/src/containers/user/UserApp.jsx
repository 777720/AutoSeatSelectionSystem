import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd';

class UserApp extends React.Component {
  handleClick = (e) => {
    console.log(e);
  }
  render () {
    return(
      <div>
        <Menu
          onClick={this.handleClick}
          mode="horizontal"
        >
          <Menu.Item key='shouye'>
            <Icon type="home" />首页
          </Menu.Item>
          <Menu.Item key='zixishi'>
            <Icon type="cloud-o" />自习室
          </Menu.Item>
          <Menu.Item key='yuyuexuanzuo'>
            <Icon type="contacts" />预约选座
          </Menu.Item>
          <Menu.SubMenu title={<span><Icon type="setting" />你好！ {this.props.username}</span>}>
            <Menu.ItemGroup>
              <Menu.Item key='1'>个人设置</Menu.Item>
              <Menu.Item key='2'>我的预约</Menu.Item>
              <Menu.Item key='3'>登出</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>


      </div>
    )
  }
}

UserApp.propTypes = {
  username: PropTypes.string.isRequired,
}

const UserContainer = ({match}) => (
  <UserApp username={match.params.username}/>
)

export default UserContainer;
