import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import IndexContainer from './index/IndexContainer.jsx';
import UserApp from './user/UserApp.jsx';
import AdminApp from './admin/AdminApp.jsx';



class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={IndexContainer} />
          <Route path="/user/:username" component={UserApp} />
          <Route path="/admin/:adminname" component={AdminApp} />
        </div>
      </Router>
    )
  }
}
export default App;
