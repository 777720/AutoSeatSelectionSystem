import React, { PropTypes } from 'react';
import axios from 'axios';
import StudyRoomList from './StudyRoomList.jsx';
import StudyRoomView from './StudyRoomView.jsx';

class BookApp extends React.Component {
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
  getIndex = (index) => {
    this.setState({
      clickRoom: this.state.roomList[index],
    })
  }

  render () {
    return(
      <div>
        自习室列表
        <StudyRoomList roomList={this.state.roomList} getClickIndex={this.getIndex}/>
        <hr />
        {
          this.state.clickRoom && <StudyRoomView room={this.state.clickRoom}/>
        }
      </div>
    )
  }
}

export default BookApp;
