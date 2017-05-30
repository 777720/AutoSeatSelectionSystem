import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import cx from 'classnames';

class SignIn extends React.Component {

  login = () => {
    const { match, location, history  } = this.props;
    const username = this.username.value;
    const password = this.password.value;
    const role = this.role.value;
    if (role === 'admin') {
      this.adminLogin(username, password);

    } else {
      history.replace(`/user/${username}`);
    }
  }
  adminLogin = (username, password) => {
    axios.post(`/api/admin/adminlogin`, '', {
      params: {
        adminName: username,
        password,
      }
    })
    .then((response) => {
      if (response.data.success) {
        this.props.history.replace(`/admin/${username}`)
      }
    })
  }
  render () {
    return(
      <div>
        <dl className={bootstrap.form}>
          <dd>
            <label className={cx(bootstrap['form-label'], bootstrap['text-shadow-light'], bootstrap['sr-only'])}></label>
            <input
              ref={ (c) => { this.username = c ; } }
              type='text'
              className={cx(bootstrap['form-control'], bootstrap['form-control-lg'], bootstrap['input-block'])}
              placeholder='输入用户名'
            />
          </dd>
        </dl>
        <dl className={bootstrap.form}>
          <dd>
            <label className={cx(bootstrap['form-label'], bootstrap['text-shadow-light'], bootstrap['sr-only'])}></label>
            <input
              ref={ (c) => { this.password = c ; } }
              type='password'
              className={cx(bootstrap['form-control'], bootstrap['form-control-lg'], bootstrap['input-block'])}
              placeholder='输入密码'
            />
          </dd>
        </dl>
        <dl>
          <select
            className={bootstrap['custom-select']}
            ref={ (c) => { this.role = c ; } }
          >
            <option selected value='user'>普通用户</option>
            <option value='admin'>管理员用户</option>
          </select>

        </dl>
        <button
          className={cx(bootstrap['btn'], bootstrap['btn-warning'], bootstrap['btn-lg'], bootstrap['btn-block'])}
          type="button"
          onClick={this.login}
        >
          登录你的账号
        </button>
      </div>
    )
  }
}

export default withRouter(SignIn);
