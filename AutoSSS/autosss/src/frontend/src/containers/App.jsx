import React, { Component, PropTypes } from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';


class App extends Component {
  static proTypes = {
    user: PropTypes.objectOf(PropTypes.string),
  }

  static defaultProps = {
    user: null,
  }
  state = {
    user: this.props.user,
  }
  render() {
    return (
      <Router history={browserHistory} routes={routes}/>
    )
  }
}


export default App;
