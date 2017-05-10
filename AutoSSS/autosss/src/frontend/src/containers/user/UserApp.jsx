import React, { PropTypes } from 'react';
import { Layout, Menu } from 'antd';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserHeader from '../../components/header/UserHeader.jsx';
import BookApp from '../../components/BookStudyRoom/BookApp.jsx'
import StudyRoom from '../../components/StudyRoom/StudyRoom.jsx'

const { Header, Content, Footer } = Layout;


class UserApp extends React.Component {
  render () {
    return(
      <Layout>
        <UserHeader username={this.props.match.params.username}/>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380, marginTop: 24 }}>
            <Route path={`${this.props.match.url}/book`} component={BookApp} />
            <Route path={`${this.props.match.url}/studyroom`} component={StudyRoom} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

UserApp.propTypes = {
  username: PropTypes.string,
}



export default withRouter(UserApp);
