import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class AdminHead extends React.Component {
  render () {
    return(
      <div>
        <span>大连科技学院自习室后台管理系统</span>
        <Button style={{float: 'right', marginTop: 17}}> <Link to={"/"}>登出</Link> </Button>
      </div>

    )

  }
}

export default withRouter(AdminHead);
