import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Radio, } from 'antd';
import React, { PropTypes } from 'react'
const FormItem = Form.Item;
const Option = Select.Option;
const classAndDepartment = [{
  value: '1',
  label: '信息科学系',
  children: [{
    value: '1-1',
    label: '计算机科学与技术',
    children: [{
      value: '1-1-1',
      label: '1班',
    },{
      value: '1-1-2',
      label: '2班',
    },{
      value: '1-1-3',
      label: '3班',
    }],
  },{
    value: '1-2',
    label: '物联网',
    children: [{
      value: '1-2-1',
      label: '1班',
    },{
      value: '1-2-2',
      label: '2班',
    },{
      value: '1-2-3',
      label: '3班',
    }],
  }],
}, {
  value: '2',
  label: '艺术系',
  children: [{
    value: '2-1',
    label: '产品设计',
    children: [{
      value: '2-2-1',
      label: '1班',
    },{
      value: '2-2-2',
      label: '2班',
    }],
  }],
}];
const department = [
  {
    value: '1',
    label: '信息科学系',
  },{
    value: '2',
    label: '艺术系',
  }
]

class SignModal extends React.Component {

  cascaderOnChange = (value) => {
    console.log(value);
  }

  render (){
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return(
      <div>
        <div>
          <Form>
            <Row>
              <FormItem { ... formItemLayout} label='用户名' hasFeedback>
                <Input />
              </FormItem>
            </Row>
            <Row>
              <FormItem {...formItemLayout} label="密码" hasFeedback>
                <Input type="password" />
              </FormItem>
            </Row>
            <Row>
              <FormItem {...formItemLayout} label="专业/班级">
                <Cascader options={(this.props.role === '学生') ? classAndDepartment : department } onChange={this.cascaderOnChange} placeholder="请选择专业班级"/>
              </FormItem>
            </Row>
            <Row>
              <Col span={7}>
                <FormItem {...formItemLayout} label="姓名"><Input /></FormItem>
              </Col>
              <Col span={7}>
                <FormItem {...formItemLayout} label="年龄"><Input /></FormItem>
              </Col>
              <Col span={10}>
                <FormItem {...formItemLayout} label="性别">
                  <Radio.Group>
                    <Radio value={1}>男</Radio>
                    <Radio value={2}>女</Radio>
                  </Radio.Group>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <FormItem {...formItemLayout} label={ (this.props.role === '学生') ? '学生证' : '身份证' }>
                <Input style={{ width: '70%' }}/>
              </FormItem>
            </Row>
            <Row>
              <FormItem {...formItemLayout} label="地址">
                <Input />
              </FormItem>
            </Row>
          </Form>
        </div>
      </div>
    )
  }
}

SignModal.propTypes = {
  role: PropTypes.string.isRequired,
};

SignModal.defaultProps = {
};



export default SignModal;
