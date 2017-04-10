import React, { PropTypes } from 'react'
import cx from 'classnames'
import indexpagecss from './css/indexPage.css'
import { Input, Icon } from 'antd';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

class IndexContainer extends React.Component {
  render () {
    return(
      <div>
          <div className={cx(indexpagecss.header)}>
            <div className={cx(indexpagecss.container)}>
              <Input.Search
                placeholder="input search text"
                style={{ width: 200, float: 'left' }}
                onSearch={value => console.log(value)}
              />
              <ul className={cx(indexpagecss['header-nav'], indexpagecss['float-left'])}>
                <li className={indexpagecss['header-nav-item']}><a className={indexpagecss['header-nav-link']}>首页</a></li>
                <li className={indexpagecss['header-nav-item']}><a className={indexpagecss['header-nav-link']}>留言</a></li>
                <li className={indexpagecss['header-nav-item']}><a className={indexpagecss['header-nav-link']}>公告</a></li>
                <li className={indexpagecss['header-nav-item']}><a className={indexpagecss['header-nav-link']}>帮助</a></li>
              </ul>
              <div style={{ float: 'right' }}>
                <ul className={cx(indexpagecss['header-nav'], indexpagecss['float-left'])}>
                  <li className={indexpagecss['header-nav-item']}><a className={indexpagecss['header-nav-link']}>注册</a></li>
                  <li className={indexpagecss['header-nav-item']}><a className={indexpagecss['header-nav-link']}>登录</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx(indexpagecss.jumbotron, indexpagecss['jumbotron-home'])}>
            <div className={cx(indexpagecss.container)}>
              <div className={cx(bootstrap['d-md-flex'], bootstrap['flex-items-center'], bootstrap['gut-lg'])}>
                <div className={cx(bootstrap['col-md-7'], bootstrap['text-md-left'])}>
                  <h1 className={cx(bootstrap['alt-h0'], bootstrap['text-white'], bootstrap['lh-condensed-ultra'], bootstrap['mb-3'])}>Built for developers</h1>
                </div>
                <div className={cx(bootstrap['col-md-5'])}>
                  <dl className={bootstrap.form}>
                    <dd>
                      <label className={cx(bootstrap['form-label'], bootstrap['text-shadow-light'], bootstrap['sr-only'])}></label>
                      <input
                        type='text'
                        className={cx(bootstrap['form-control'], bootstrap['form-control-lg'], bootstrap['input-block'])}
                        placeholder='Pick a username'
                      />
                    </dd>
                  </dl>
                  <dl className={bootstrap.form}>
                    <dd>
                      <label className={cx(bootstrap['form-label'], bootstrap['text-shadow-light'], bootstrap['sr-only'])}></label>
                      <input
                        type='text'
                        className={cx(bootstrap['form-control'], bootstrap['form-control-lg'], bootstrap['input-block'])}
                        placeholder='Pick a password'
                      />
                    </dd>
                    <p classnames={bootstrap['form-control-note']}>Use at least one letter, one numeral, and seven characters.</p>
                  </dl>
                  <button className={cx(bootstrap['btn'], bootstrap['btn-warning'], bootstrap['btn-lg'], bootstrap['btn-block'])} type="submit">Sign up for GitHub</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default IndexContainer;
