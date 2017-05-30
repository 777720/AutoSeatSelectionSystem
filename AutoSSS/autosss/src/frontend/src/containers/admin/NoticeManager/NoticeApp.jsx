import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import { Input, Button, message } from 'antd';
import Editor from 'react-md-editor';
import axios from 'axios';
import 'react-md-editor/dist/react-md-editor.css';
import 'codemirror/lib/codemirror.css';

const EditorDivStyle = {
  float: 'left',
  width: '50%',
}
const previewDivStyle = {
  float: 'left',
  marginLeft: '4%',
  width: '46%',
}

class NoticeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '请输入内容......',
      title: '',
    }
  }
  updateCode = (newCode) => {
    this.setState({
      code: newCode,
    })
  }
  reSet = () => {
    this.setState({
      code: '请输入内容......',
    })
  }
  titleUpdate = (e) => {
    this.setState({
      title: e.target.value,
    })
  }
  goUp = () => {
    const text = this.state.code;
    const title =  this.state.title;
    axios.post(`/api/admin/createnotice`,
      text,
      title,
    )
    .then((response) => {
      if (response.data.success) {
          message.success(response.data.message);
          this.setState({
            code: '请输入内容......',
            title: '',
          })
      }else {
          message.error(response.data.message);
      }
    })
  }
  render () {
    const preview = marked(this.state.code);

    return(
      <div>
        <div><Input placeholder="请输入公告标题" style={{ marginBottom: 15 }}  onChange={this.titleUpdate}/></div>
        <hr />
        <div style={EditorDivStyle}>
          <Editor value={this.state.code} onChange={this.updateCode}/>
          <div style={{ margin: 15 }}>
            <Button type="primary" style={{ marginRight: 15 }} onClick={this.goUp}>发布</Button>
            <Button onClick={this.reSet}>重置</Button>
          </div>
        </div>
        <div style={previewDivStyle} dangerouslySetInnerHTML={{__html: preview}} />

      </div>
    )
  }
}

export default NoticeApp;
