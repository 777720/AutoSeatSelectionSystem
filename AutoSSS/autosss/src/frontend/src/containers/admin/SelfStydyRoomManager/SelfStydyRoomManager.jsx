import React, { PropTypes } from 'react';
import { Button, Collapse } from 'antd';
import CreateStudyRoom from './CreateStudyRoom.jsx'


class SelfStydyRoomManagerApp extends React.Component {

  render () {
    return(
      <div>
        <Collapse>
          <Collapse.Panel header="新增自习室" key="1">
            <CreateStudyRoom />
          </Collapse.Panel>
        </Collapse>
        <hr/>
      </div>
    )
  }
}

export default SelfStydyRoomManagerApp;
