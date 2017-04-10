import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import IndexContainer from './index/IndexContainer.jsx';



class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={IndexContainer}/>
        </div>
      </Router>
    )
  }
}
export default App;
