import React, { PropTypes } from 'react';
import { Menu, Icon, Row, Col } from 'antd';




class AdminApp extends React.Component {

  handleClick = () => {
    console.log('click');
  }
  render () {
    return(
      <div>
        <Menu
          onClick={this.handleClick}
          mode="horizontal"
          theme="dark"
        >
          <Menu.SubMenu title={<span><Icon type="setting" />你好！ 管理员{this.props.adminName}</span>}>
            <Menu.ItemGroup>
              <Menu.Item key='1'>管理员设置</Menu.Item>
              <Menu.Item key='3'>登出</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
        <div>
          <Row>
            <Col span={6}>111</Col>
            <Col span={18}>222</Col>
          </Row>
        </div>
      </div>
    )
  }
}
AdminApp.propTypes = {
  adminName: PropTypes.string.isRequired,
}

const AdminContainer = ({match}) => (
  <AdminApp adminName={match.params.adminname}/>
)

export default AdminContainer;
