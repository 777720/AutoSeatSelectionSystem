import React, { PropTypes } from 'react'
import 'react-md-editor/dist/react-md-editor.css';
import MDEditor from 'react-md-editor';

class NoticeApp extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return(
      <div>
        <MDEditor />
      </div>
    )
  }
}

export default NoticeApp;
