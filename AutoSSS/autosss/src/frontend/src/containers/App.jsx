import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Redirect, withRouter, } from 'react-router-dom';
import IndexContainer from './index/IndexContainer';
import UserApp from './user/UserApp';
import AdminApp from './admin/AdminApp';
import SelfStydyRoomManagerApp from './admin/SelfStydyRoomManager/SelfStydyRoomManager';



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
