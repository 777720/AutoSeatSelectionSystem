import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Collapse } from 'antd';
import CreateStudyRoom from './CreateStudyRoom.jsx'
import StudyRoomList from '../../../components/BookStudyRoom/StudyRoomList';
import StudyRoomView from '../../../components/BookStudyRoom/StudyRoomView';


class SelfStydyRoomManagerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomList: null,
      clickRoom: null,
    }
    axios.get('/api/user/getstudyroomlist').then((response) => {
      if (response.data.success) {
        this.setState({
          roomList: response.data.data,
        });
      }
    })
  }
  getClickIndex = (index) => {
    this.setState({
      clickRoom: this.state.roomList[index],
    })
  }

  render () {
    return(
      <div>
        <Collapse>
          <Collapse.Panel header="新增自习室" key="1">
            <CreateStudyRoom />
          </Collapse.Panel>
        </Collapse>
        <hr/>
        <StudyRoomList roomList={this.state.roomList} getClickIndex={this.getClickIndex}/>
        { this.state.clickRoom && <StudyRoomView room={this.state.clickRoom} isAdmin={true} /> }
      </div>
    )
  }
}

export default SelfStydyRoomManagerApp;
