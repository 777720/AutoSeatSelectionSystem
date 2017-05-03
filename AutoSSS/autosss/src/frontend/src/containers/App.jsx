import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Redirect, withRouter, } from 'react-router-dom';
import IndexContainer from './index/IndexContainer.jsx';
import UserApp from './user/UserApp.jsx';
import AdminApp from './admin/AdminApp.jsx';
import SelfStydyRoomManagerApp from './admin/SelfStydyRoomManager/SelfStydyRoomManager.jsx';



class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={IndexContainer} />
          <Route path="/user/:username" component={UserApp} />
          <Route path="/admin" component={AdminApp} />

        </div>
      </BrowserRouter>
    )
  }
}
export default App;
