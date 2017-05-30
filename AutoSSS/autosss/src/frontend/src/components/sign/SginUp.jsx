import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Radio } from 'antd';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import SignModal from './SignUpModal.jsx';
import cx from 'classnames';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      signUpRole: '学生',
      confirmLoading: false,
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    console.log(this.signModal);



    // setTimeout(() => {
    //   this.setState({
    //     visible: false,
    //     confirmLoading: false,
    //   });
    // }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  radioOnChange = (e) => {
    this.setState({
      signUpRole: e.target.value,
    });
  }

  render () {
    const fontStyle= {
      color: '#fff',
      display: 'inline',
      fontSize: 30
    };
    return (
      <div>
        <div style={{ paddingLeft: '80px' }}>
          <Radio.Group size='large' onChange={this.radioOnChange} value={this.state.signUpRole}>
            <Radio value='教师'><p style={fontStyle}>教师注册</p></Radio>
            <Radio value='学生'><p style={fontStyle}>学生注册</p></Radio>
          </Radio.Group>
        </div>
        <button
          type='button'
          className={cx(bootstrap['btn'], bootstrap['btn-warning'])}
          style={{ marginLeft: 80 }}
          onClick={this.showModal}
        >
          选择你的身份开始注册
        </button>
        <Modal
          title="填写你的注册信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          okText="注册" cancelText="取消"
        >
          <SignModal role={ this.state.signUpRole } ref={(c) => {this.signModal = c;}}/>
        </Modal>
      </div>
    )

  }
}

export default SignUp;
