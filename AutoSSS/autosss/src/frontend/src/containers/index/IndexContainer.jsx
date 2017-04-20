import React, { PropTypes } from 'react';
import cx from 'classnames';
import indexpagecss from './css/indexPage.css';
import { Input, Icon, Tabs } from 'antd';
import SignIn from '../../components/sign/SignIn.jsx';
import SignUp from '../../components/sign/SginUp.jsx';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

class IndexContainer extends React.Component {
  tabsCallback = (key) => {
    console.log(key);
  }
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
            <div className={cx(indexpagecss['container-responsive'], indexpagecss['.position-relative'])}>
              <div className={cx(bootstrap['d-md-flex'])}>
                <div className={cx(bootstrap['col-md-7'], bootstrap['text-md-left'])}>
                  <h1 className={cx(bootstrap['alt-h0'], bootstrap['text-white'], bootstrap['lh-condensed-ultra'], bootstrap['mb-3'])}>Built for developers</h1>
                </div>
                <div className={cx(bootstrap['col-md-5'])}>
                  <Tabs defaultActiveKey="1" onChange={this.tabsCallback} tabBarStyle={{ paddingLeft: 110 }}>
                    <Tabs.TabPane tab="登录" key="1"><SignIn /></Tabs.TabPane>
                    <Tabs.TabPane tab="注册" key="2"><SignUp /></Tabs.TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default IndexContainer;
