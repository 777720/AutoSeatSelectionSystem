import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Redirect, withRouter, } from 'react-router-dom';
import loadUserApp from 'bundle-loader?lazy!./user/UserApp';
import loadAdminApp from 'bundle-loader?lazy!./admin/AdminApp';
// import SelfStydyRoomManagerApp from './admin/SelfStydyRoomManager/SelfStydyRoomManager';

import Bundle from './Bundle';




const IndexContainer = () => (
  <Bundle load={() => import('./index/IndexContainer')}>
    {(IndexContainer) => IndexContainer ? <IndexContainer /> : null}
  </Bundle>
)
const UserApp = () => (
  <Bundle load={() => import('./user/UserApp')}>
    {(UserApp) => UserApp ? <UserApp /> : null}
  </Bundle>
)
const AdminApp = () => (
  <Bundle load={() => import('./admin/AdminApp')}>
    {(AdminApp) => <AdminApp />}
  </Bundle>
)


class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={IndexContainer} />
          <Route path="/user/:username" component={UserApp} />
          <Route path="/admin" component={AdminApp} />
        </div>
      </HashRouter>
    )
  }
}
export default App;
