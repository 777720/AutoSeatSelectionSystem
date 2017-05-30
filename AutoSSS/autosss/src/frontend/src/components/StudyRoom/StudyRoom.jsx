import React from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import RoomCard from './RoomCard';

class StudyRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomList: [],
    }
    axios.get('/api/user/getstudyroomlist')
    .then((response) => {
      if (response.data.success) {
        this.setState({
          roomList: response.data.data,
        });
      }
    })

  }
  render () {
    const rooms = this.state.roomList;
    return(
      <div>
        <h2 style={{textAlign: 'center'}}>自习室一览</h2>
        {
          rooms && rooms.map( (item, index) => <RoomCard key={index} room={item} /> )
        }
      </div>
    )
  }
}

export default StudyRoom;
