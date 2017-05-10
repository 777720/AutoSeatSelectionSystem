import React, { PropTypes } from 'react';
import SeatList from '../Seat/SeatList.jsx';
import { Button, Modal, DatePicker } from 'antd';
import axios from 'axios';

class StudyRoomView extends React.Component {
  constructor(props) {
    super(props);
    this.seatInfo = [];
    this.selectSeat = {};
    this.state = {
      visible: false,
      loading: false,
    }
    this.time = null;
  }


  transformSeat = (seat) => {
    this.seatInfo = [];
    let tempIndex = 1;
    let row = [];
    seat.map((item, index) => {
      if (tempIndex === item.row) {
        row.push(item);
      } else {
        this.seatInfo.push(row);
        row = [];
        row.push(item);
        tempIndex ++;
      }
    });
    this.seatInfo.push(row)
  }
  openModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  getSelectedSeat = (seatInfo) => {
     this.selectedSeat = seatInfo;
  }



  handleOk = () => {
    this.setState({
      loading: true,
    });
    axios.put(`/api/user/${this.props.room.id}/${this.time}/${this.selectedSeat.row}/${this.selectedSeat.col}/bookSeat`)
    .then((response) => {
      if (response.data.success) {
        console.log('预定成功！');
        this.setState({
          loading: false,
          visible: false,
        })
      }
    })
  }
  timeOnChange = (date, dateString) => {
    this.time = dateString;
  }
  render () {
    if (this.props.room == null) {
      return null;
    }
    const spanStyle = {
      marginLeft: 40,
    }
    const room = this.props.room;
    this.transformSeat(room.seat)
    return (
      <div>
        <div>
          <span style={ spanStyle }>位置：{room.address}</span>
          <span style={ spanStyle }>座位数：{room.seat.length}</span>
          <Button type="primary" onClick={this.openModal} style={ spanStyle }>预定座位</Button>
            <Modal
            visible={this.state.visible}
            title="预定座位"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
              <Button key="submit" type="primary" size="large"  onClick={this.handleOk} loading={this.state.loading}>
                预定
              </Button>,
            ]}
          >
            <DatePicker onChange={this.timeOnChange} placeholder='请选择预定日期'/>
          </Modal>
        </div>
        <SeatList data={this.seatInfo} getSelectedSeat={this.getSelectedSeat} />
      </div>

    )
  }
}

StudyRoomView.propTypes = {
  room: PropTypes.Object,
}

export default StudyRoomView;
